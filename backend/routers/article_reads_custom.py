import logging
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from core.database import get_db
from services.article_reads_custom import ArticleReadsCustomService

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/v1/reads", tags=["reads"])


class IncrementRequest(BaseModel):
    article_id: str


class ReadCountResponse(BaseModel):
    article_id: str
    read_count: int


class AllReadsResponse(BaseModel):
    reads: list[ReadCountResponse]


@router.post("/increment", response_model=ReadCountResponse)
async def increment_read(
    data: IncrementRequest,
    db: AsyncSession = Depends(get_db),
):
    """Increment read count for an article (no auth required - public counter)"""
    service = ArticleReadsCustomService(db)
    result = await service.increment_read(data.article_id)
    return ReadCountResponse(**result)


@router.get("/all", response_model=AllReadsResponse)
async def get_all_reads(
    db: AsyncSession = Depends(get_db),
):
    """Get read counts for all articles (public endpoint)"""
    service = ArticleReadsCustomService(db)
    reads = await service.get_all_reads()
    return AllReadsResponse(reads=[ReadCountResponse(**r) for r in reads])