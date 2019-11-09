//
//  SpecificQs.cpp
//  TheoryProj
//
//  Created by True Sandoval on 11/4/19.
//

#include "SpecificQs.h"

SpecificQs::SpecificQs(){
    for (string x : answers){
        x = "none.";
    }
}
void SpecificQs::addAnswer(string response){
    answers.at(count) = response;
    count++;
}
void SpecificQs::setAnswer(string userAnswer) {
    answer = userAnswer;

}

