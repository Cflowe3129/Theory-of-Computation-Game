//
//  GeneralQ.hpp
//  TheoryProj
//
//  Created by True Sandoval on 11/4/19.
//

#ifndef GeneralQs_h
#define GeneralQs_h

#include <stdio.h>
#include <string>
#include <vector>
#include <iostream>
using namespace std;

class GeneralQ {
public:
    GeneralQ(); //default constructor
    void addAnswer(string response); //populate answer array
    void setAnswer(string userAnswer);
    void setVector(const vector<string> &x) {answers = x;}
    string getAnswer() { return answer; }
    vector<string> const &getVector() const { return answers;}
private:
    int count;
    vector<string> answers;
    string answer;
}Qtester;

#endif /* GeneralQ_h */

