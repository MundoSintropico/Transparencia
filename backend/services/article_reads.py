import logging
from typing import Optional, Dict, Any, List

from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from models.article_reads import Article_reads

logger = logging.getLogger(__name__)


# ------------------ Service Layer ------------------
class Article_readsService:
    """Service layer for Article_reads operations"""

    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, data: Dict[str, Any]) -> Optional[Article_reads]:
        """Create a new article_reads"""
        try:
            obj = Article_reads(**data)
            self.db.add(obj)
            await self.db.commit()
            await self.db.refresh(obj)
            logger.info(f"Created article_reads with id: {obj.id}")
            return obj
        except Exception as e:
            await self.db.rollback()
            logger.error(f"Error creating article_reads: {str(e)}")
            raise

    async def get_by_id(self, obj_id: int) -> Optional[Article_reads]:
        """Get article_reads by ID"""
        try:
            query = select(Article_reads).where(Article_reads.id == obj_id)
            result = await self.db.execute(query)
            return result.scalar_one_or_none()
        except Exception as e:
            logger.error(f"Error fetching article_reads {obj_id}: {str(e)}")
            raise

    async def get_list(
        self, 
        skip: int = 0, 
        limit: int = 20, 
        query_dict: Optional[Dict[str, Any]] = None,
        sort: Optional[str] = None,
    ) -> Dict[str, Any]:
        """Get paginated list of article_readss"""
        try:
            query = select(Article_reads)
            count_query = select(func.count(Article_reads.id))
            
            if query_dict:
                for field, value in query_dict.items():
                    if hasattr(Article_reads, field):
                        query = query.where(getattr(Article_reads, field) == value)
                        count_query = count_query.where(getattr(Article_reads, field) == value)
            
            count_result = await self.db.execute(count_query)
            total = count_result.scalar()

            if sort:
                if sort.startswith('-'):
                    field_name = sort[1:]
                    if hasattr(Article_reads, field_name):
                        query = query.order_by(getattr(Article_reads, field_name).desc())
                else:
                    if hasattr(Article_reads, sort):
                        query = query.order_by(getattr(Article_reads, sort))
            else:
                query = query.order_by(Article_reads.id.desc())

            result = await self.db.execute(query.offset(skip).limit(limit))
            items = result.scalars().all()

            return {
                "items": items,
                "total": total,
                "skip": skip,
                "limit": limit,
            }
        except Exception as e:
            logger.error(f"Error fetching article_reads list: {str(e)}")
            raise

    async def update(self, obj_id: int, update_data: Dict[str, Any]) -> Optional[Article_reads]:
        """Update article_reads"""
        try:
            obj = await self.get_by_id(obj_id)
            if not obj:
                logger.warning(f"Article_reads {obj_id} not found for update")
                return None
            for key, value in update_data.items():
                if hasattr(obj, key):
                    setattr(obj, key, value)

            await self.db.commit()
            await self.db.refresh(obj)
            logger.info(f"Updated article_reads {obj_id}")
            return obj
        except Exception as e:
            await self.db.rollback()
            logger.error(f"Error updating article_reads {obj_id}: {str(e)}")
            raise

    async def delete(self, obj_id: int) -> bool:
        """Delete article_reads"""
        try:
            obj = await self.get_by_id(obj_id)
            if not obj:
                logger.warning(f"Article_reads {obj_id} not found for deletion")
                return False
            await self.db.delete(obj)
            await self.db.commit()
            logger.info(f"Deleted article_reads {obj_id}")
            return True
        except Exception as e:
            await self.db.rollback()
            logger.error(f"Error deleting article_reads {obj_id}: {str(e)}")
            raise

    async def get_by_field(self, field_name: str, field_value: Any) -> Optional[Article_reads]:
        """Get article_reads by any field"""
        try:
            if not hasattr(Article_reads, field_name):
                raise ValueError(f"Field {field_name} does not exist on Article_reads")
            result = await self.db.execute(
                select(Article_reads).where(getattr(Article_reads, field_name) == field_value)
            )
            return result.scalar_one_or_none()
        except Exception as e:
            logger.error(f"Error fetching article_reads by {field_name}: {str(e)}")
            raise

    async def list_by_field(
        self, field_name: str, field_value: Any, skip: int = 0, limit: int = 20
    ) -> List[Article_reads]:
        """Get list of article_readss filtered by field"""
        try:
            if not hasattr(Article_reads, field_name):
                raise ValueError(f"Field {field_name} does not exist on Article_reads")
            result = await self.db.execute(
                select(Article_reads)
                .where(getattr(Article_reads, field_name) == field_value)
                .offset(skip)
                .limit(limit)
                .order_by(Article_reads.id.desc())
            )
            return result.scalars().all()
        except Exception as e:
            logger.error(f"Error fetching article_readss by {field_name}: {str(e)}")
            raise