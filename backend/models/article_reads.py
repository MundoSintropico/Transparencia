from core.database import Base
from sqlalchemy import Column, Integer, String


class Article_reads(Base):
    __tablename__ = "article_reads"
    __table_args__ = {"extend_existing": True}

    id = Column(Integer, primary_key=True, index=True, autoincrement=True, nullable=False)
    article_id = Column(String, nullable=False)
    read_count = Column(Integer, nullable=False, default=0, server_default='0')