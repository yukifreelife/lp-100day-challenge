#!/usr/bin/env python3
"""
Capture screenshots for Day066 Stitch LP
"""

import time
import os
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

# Setup paths
BASE_DIR = "/Users/yuuki/Works/lp-100/day066/current/wheat-bean-stitch"
URL = "http://localhost:8080/day066/current/wheat-bean-stitch/"

# Viewport sizes
DESKTOP_WIDTH = 1920
DESKTOP_HEIGHT = 1080
MOBILE_WIDTH = 390
MOBILE_HEIGHT = 844


def setup_driver(width, height):
    """Setup Chrome driver with specified viewport"""
    options = Options()
    options.add_argument('--headless=new')
    options.add_argument(f'--window-size={width},{height}')
    options.add_argument('--force-device-scale-factor=1')
    options.add_argument('--hide-scrollbars')
    return webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)


def capture_full_page_screenshot(driver, filename, width, height):
    """Capture full page screenshot"""
    driver.set_window_size(width, height)
    driver.get(URL)

    # Wait for page to fully load
    time.sleep(2)

    # Wait for animations to complete
    driver.execute_script("document.body.classList.add('page-loaded')")
    time.sleep(1)

    # Get full page height
    total_height = driver.execute_script("return document.body.scrollHeight")

    # Set window to full page height for capture
    driver.set_window_size(width, total_height)
    time.sleep(0.5)

    # Capture screenshot
    driver.save_screenshot(filename)
    print(f"✓ Captured: {filename}")


def capture_hero_screenshot(driver, filename, width, height):
    """Capture hero section screenshot (viewport only)"""
    driver.set_window_size(width, height)
    driver.get(URL)

    # Wait for page to fully load
    time.sleep(2)

    # Wait for hero animation
    driver.execute_script("document.body.classList.add('page-loaded')")
    time.sleep(1)

    # Capture viewport only
    driver.save_screenshot(filename)
    print(f"✓ Captured: {filename}")


def main():
    os.chdir(BASE_DIR)

    print("Setting up Chrome driver...")
    print("\nCapturing screenshots:\n")

    # Desktop screenshots
    print("--- Desktop (1920x1080) ---")
    driver_desktop = setup_driver(DESKTOP_WIDTH, DESKTOP_HEIGHT)

    capture_hero_screenshot(
        driver_desktop,
        "fv-desktop.png",
        DESKTOP_WIDTH,
        DESKTOP_HEIGHT
    )

    capture_full_page_screenshot(
        driver_desktop,
        "full-desktop.png",
        DESKTOP_WIDTH,
        DESKTOP_HEIGHT
    )

    driver_desktop.quit()

    # Mobile screenshots
    print("\n--- Mobile (390x844) ---")
    driver_mobile = setup_driver(MOBILE_WIDTH, MOBILE_HEIGHT)

    capture_hero_screenshot(
        driver_mobile,
        "fv-mobile.png",
        MOBILE_WIDTH,
        MOBILE_HEIGHT
    )

    capture_full_page_screenshot(
        driver_mobile,
        "full-mobile.png",
        MOBILE_WIDTH,
        MOBILE_HEIGHT
    )

    driver_mobile.quit()

    print("\n✓ All screenshots captured successfully!")


if __name__ == "__main__":
    main()
