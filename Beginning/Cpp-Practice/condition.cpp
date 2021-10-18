#include <iostream>

using namespace std;


int main(){
    double cgpa;
    cout << " Enter Your Grade: " << endl;

    cin >> cgpa;

    if (cgpa == 4){
    cout << "Your Grade Is 'A(+)'" << endl;
    }else if(cgpa >= 3.75){
    cout << "Your Grade Is A " << endl;
    }else {
        cout << "Your Grade Is B" << endl;
    }

    return 0;
}