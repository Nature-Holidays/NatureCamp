# app/models/package.py
from typing import List, Optional
from pydantic import BaseModel, Field
from datetime import datetime, timezone

class Duration(BaseModel):
    days: int
    nights: int

class ItineraryItem(BaseModel):
    day: int
    title: str
    activities: List[str]

class Price(BaseModel):
    currency: str
    amount: Optional[float] = None

class Package(BaseModel):
    package_name: str
    slug: str
    duration: Duration
    summary: str
    regions_covered: List[str]
    start_location: str
    end_location: str
    itinerary: List[ItineraryItem]
    inclusions: List[str]
    exclusions: List[str]
    price: Price
    tags: List[str]
    created_at: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: Optional[datetime] = Field(default_factory=lambda: datetime.now(timezone.utc))
