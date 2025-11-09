import pygame
from pygame.locals import *
import sys
import math

pygame.init()

# Размер окна
WIDTH, HEIGHT = 800, 800
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Движение Первых — вращающийся логотип")

# Загружаем логотип
logo = pygame.image.load("static/images/logo.png").convert_alpha()

# Масштабируем логотип под окно
logo = pygame.transform.smoothscale(logo, (400, 400))
logo_rect = logo.get_rect(center=(WIDTH // 2, HEIGHT // 2))

clock = pygame.time.Clock()
angle = 0
time_counter = 0

running = True
while running:
    for event in pygame.event.get():
        if event.type == QUIT:
            running = False

    # Пульсирующий красный фон
    time_counter += 0.05
    red_value = int(180 + 60 * math.sin(time_counter))
    screen.fill((red_value, 0, 0))

    # Мягкое свечение вокруг логотипа
    glow_surface = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
    for i in range(1, 8):
        alpha = max(0, 100 - i * 12)
        pygame.draw.circle(
            glow_surface,
            (255, 255, 255, alpha),
            logo_rect.center,
            220 + i * 10
        )
    screen.blit(glow_surface, (0, 0))

    # Вращаем логотип
    rotated_logo = pygame.transform.rotozoom(logo, angle, 1)
    rect = rotated_logo.get_rect(center=logo_rect.center)
    screen.blit(rotated_logo, rect)

    pygame.display.flip()

    angle = (angle + 2) % 360
    clock.tick(60)

pygame.quit()
sys.exit()
