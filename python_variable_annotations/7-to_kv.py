#!/usr/bin/env python3
from typing import Union, Tuple

def to_kev(k: str, v: Union[int, float]) -> Tuple[str, float]:
    return (k, float(v * v))
