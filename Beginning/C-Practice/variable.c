#include <stdio.h>
  
int main(){
    // Declare the variables
    int num;
    float f;
    char name[20];
    char ch;
    
    // Input the integer
    printf("Enter the integer:");
    scanf("%d", &num);
  
    // Output the integer
    printf("\n You Entered integer is: %d \n", num);

    // Input the float
    printf("\n\nEnter the float: ");
    scanf("%f", &f);
  
    // Output the float
    printf("\n You Entered float is: %f \n", f);

     // Input the Character
    printf("Enter the Character:");
    scanf("%c", &ch);
  
    // Output the Character
    printf("You Entered Character is: %c \n", ch);

    return 0;
}