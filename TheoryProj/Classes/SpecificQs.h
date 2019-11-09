//
//  SpecificQs.h
//  TheoryProj
//
//  Created by True Sandoval on 11/4/19.
//

#ifndef SpecificQs_h
#define SpecificQs_h

#include <stdio.h>
#include <string>
#include <iostream>
using namespace std;

class SpecificQs {
    public:
        SpecificQs(); //default constructor
        void addAnswer(string response); //populate answer array
        void setAnswer(string userAnswer);
        void setVector(const vector<string> &x) {answers = x;}
        string getAnswer() { return answer; }
        vector<string> const &getVector() const { return answers;}
    private:
        int count;
        vector<string> answers;
        string answer;
    }Bird, Reptile, Fish, Amphibian, Mammal;


#endif /* SpecificQs.h */

