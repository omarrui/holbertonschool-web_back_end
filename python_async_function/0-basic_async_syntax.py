#!/usr/bin/env python3
"""Async coroutine that waits for a random delay."""

import asyncio
import random

async def wait_random(max_delay: int = 10) ->float:
    """wait for a random deklay between 0 and max delay s and return it"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
