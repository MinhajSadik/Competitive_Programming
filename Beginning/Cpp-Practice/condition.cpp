#include <iostream>

using namespace std;


int main(){
    double cgpa;
    cout << " Enter Your Grade: " << endl;

    cin >> cgpa;

    if (cgpa >= 4.00){
    cout << " Your Grade Is A" << endl;
    }else{
    cout << " Your Grade Is not A " << endl;
    }

    return 0;
}