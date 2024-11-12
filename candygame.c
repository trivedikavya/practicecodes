#include <stdio.h>
#include <stdlib.h>
#include <conio.h>    // For _kbhit() and _getch()
#include <windows.h>  // For Sleep()

#define WIDTH 40
#define HEIGHT 20

// Game variables
int paddleX, ballX, ballY;
int ballDirX = 1, ballDirY = 1;
int score = 0, lives = 3, level = 1;

// Function to draw the game
void draw() {
    system("cls");  // Clear the console
    for (int y = 0; y < HEIGHT; y++) {
        for (int x = 0; x < WIDTH; x++) {
            if (y == HEIGHT - 1 && x >= paddleX && x < paddleX + 7) {
                printf("=");  // Draw paddle
            } else if (y == ballY && x == ballX) {
                printf("O");  // Draw ball
            } else {
                printf(" ");
            }
        }
        printf("\n");
    }
    printf("Score: %d  Lives: %d  Level: %d\n", score, lives, level);
}

// Function to handle ball movement
void updateBall() {
    ballX += ballDirX;
    ballY += ballDirY;

    // Ball bounces off walls
    if (ballX <= 0 || ballX >= WIDTH - 1) ballDirX = -ballDirX;
    if (ballY <= 0) ballDirY = -ballDirY;

    // Ball reaches the paddle
    if (ballY == HEIGHT - 2 && ballX >= paddleX && ballX < paddleX + 7) {
        ballDirY = -ballDirY;
        score++;
        if (score % 20 == 0) {  // Increase level every 20 points
            level++;
        }
    }

    // Ball falls below paddle
    if (ballY >= HEIGHT - 1) {
        lives--;
        ballX = WIDTH / 2;
        ballY = HEIGHT / 2;
        ballDirY = -ballDirY;
    }
}

// Function to handle paddle movement
void updatePaddle() {
    if (_kbhit()) {
        char key = _getch();
        if (key == 75 && paddleX > 0)          // Left arrow key
            paddleX -= 2;
        else if (key == 77 && paddleX < WIDTH - 7)  // Right arrow key
            paddleX += 2;
    }
}

// Main function
int main() {
    // Initialize positions
    paddleX = WIDTH / 2 - 3;
    ballX = WIDTH / 2;
    ballY = HEIGHT / 2;

    while (lives > 0) {
        draw();
        updateBall();
        updatePaddle();
        Sleep(100 - level * 5);  // Increase speed with each level

        if (level > 15) level = 15;  // Cap the speed

        if (lives <= 0) {
            printf("Game Over! Final Score: %d\n", score);
            break;
        }
    }
    return 0;
}
