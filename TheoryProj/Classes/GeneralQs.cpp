//
//  GeneralQ.cpp
//  TheoryProj
//
//  Created by True Sandoval on 11/4/19.
//

#include "GeneralQs.h"
#include <iostream>
using namespace std;

GeneralQ::GeneralQ(){
    for (string x : answers){
        x = "none.";
    }
}
void GeneralQ::addAnswer(string response){
    answers.at(count) = response;
    count++;
}
void GeneralQ::setAnswer(string userAnswer) {
    answer = userAnswer;

}

