import logging
from sqlalchemy import select, update
from sqlalchemy.ext.asyncio import AsyncSession
from models.article_reads import Article_reads

logger = logging.getLogger(__name__)


class ArticleReadsCustomService:
    """Custom service for article read count operations"""

    def __init__(self, db: AsyncSession):
        self.db = db

    async def increment_read(self, article_id: str) -> dict:
        """Increment read count for an article and return the new count"""
        try:
            # Try to find existing record
            result = await self.db.execute(
                select(Article_reads).where(Article_reads.article_id == article_id)
            )
            record = result.scalar_one_or_none()

            if record:
                new_count = record.read_count + 1
                await self.db.execute(
                    update(Article_reads)
                    .where(Article_reads.article_id == article_id)
                    .values(read_count=new_count)
                )
                await self.db.commit()
                return {"article_id": article_id, "read_count": new_count}
            else:
                # Create new record with count 1
                new_record = Article_reads(article_id=article_id, read_count=1)
                self.db.add(new_record)
                await self.db.commit()
                return {"article_id": article_id, "read_count": 1}
        except Exception as e:
            logger.error(f"Error incrementing read count: {e}")
            await self.db.rollback()
            raise

    async def get_all_reads(self) -> list[dict]:
        """Get read counts for all articles"""
        try:
            result = await self.db.execute(select(Article_reads))
            records = result.scalars().all()
            return [
                {"article_id": r.article_id, "read_count": r.read_count}
                for r in records
            ]
        except Exception as e:
            logger.error(f"Error getting read counts: {e}")
            raise