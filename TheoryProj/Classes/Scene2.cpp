//
//  Scene2.cpp
//  TheoryProj-mobile
//
//  Created by Christopher Flowers on 11/4/19.
//

#include "Scene2.h"
#include "SimpleAudioEngine.h"

USING_NS_CC;

Scene* Scene2::createScene()
{
    return Scene2::create();
}

// Print useful error message instead of segfaulting when files are not there.
static void issueLoading(const char* filename)
{
    printf("Error while loading: %s\n", filename);
    printf("Depending on how you compiled you might have to add 'Resources/' in front of filenames in HelloWorldScene.cpp\n");
}

// on "init" you need to initialize your instance
bool Scene2::init()
{
    //////////////////////////////
    // 1. super init first
    if ( !Scene::init() )
    {
        return false;
    }

    auto visibleSize = Director::getInstance()->getVisibleSize();
    Vec2 origin = Director::getInstance()->getVisibleOrigin();

    auto playItem = MenuItemImage::create(
    "Start.png",
    "Start.png",
    CC_CALLBACK_1(Scene2::menuCloseCallback, this));
    
    if (playItem == nullptr ||
        playItem->getContentSize().width <= 0 ||
        playItem->getContentSize().height <= 0)
    {
        issueLoading("'Start.png' and 'Start.png'");
    }
    else
    {
        float x = origin.x + visibleSize.width - playItem->getContentSize().width / .8;
        float y = origin.y + playItem->getContentSize().height;
        playItem->setPosition(Vec2(x,y));
    }
    // create menu, it's an autorelease object
    auto playMenu = Menu::create(playItem, NULL);
    playMenu->setPosition(Vec2::ZERO);
    this->addChild(playMenu, 2);
    
    /////////////////////////////
    // 2. add a menu item with "X" image, which is clicked to quit the program
    //    you may modify it.

    // add a "close" icon to exit the progress. it's an autorelease object
    auto closeItem = MenuItemImage::create(
                                           "CloseNormal.png",
                                           "CloseSelected.png",
                                           CC_CALLBACK_1(Scene2::menuCloseCallback, this));

    if (closeItem == nullptr ||
        closeItem->getContentSize().width <= 0 ||
        closeItem->getContentSize().height <= 0)
    {
        issueLoading("'CloseNormal.png' and 'CloseSelected.png'");
    }
    else
    {
        float x = origin.x + visibleSize.width - closeItem->getContentSize().width/2;
        float y = origin.y + closeItem->getContentSize().height/2;
        closeItem->setPosition(Vec2(x,y));
    }

    // create menu, it's an autorelease object
    auto menu = Menu::create(closeItem, NULL);
    menu->setPosition(Vec2::ZERO);
    this->addChild(menu, 1);

    /////////////////////////////
    // 3. add your codes below...

    // add a label shows The game title
    // create and initialize a label

    auto label = Label::createWithTTF("Pick an animal from the list below.", "fonts/Marker Felt.ttf", 24);
    if (label == nullptr)
    {
        issueLoading("'fonts/Marker Felt.ttf'");
    }
    else
    {
        // position the label on the center of the screen
        label->setPosition(Vec2(origin.x + visibleSize.width/2,
                                origin.y + visibleSize.height - label->getContentSize().height));

        // add the label as a child to this layer
        this->addChild(label, 1);
    }

    auto label2 = Label::createWithTTF("Penguin, Komodo Dragon, Great White Shark, Frog, Gorilla", "fonts/Marker Felt.ttf", 18);
    if (label2 == nullptr)
    {
        issueLoading("'fonts/Marker Felt.ttf'");
    }
    else
    {
        // position the label on the center of the screen
        label2->setPosition(Vec2(origin.x + visibleSize.width/2,
                                origin.y + visibleSize.height - label2->getContentSize().height - 80));

        // add the label as a child to this layer
        this->addChild(label2, 1);
    }
    
    
    auto label3 = Label::createWithTTF("Toucan, Snake, Swordfish, Salamander, Lion", "fonts/Marker Felt.ttf", 18);
    if (label3 == nullptr)
    {
        issueLoading("'fonts/Marker Felt.ttf'");
    }
    else
    {
        // position the label on the center of the screen
        label3->setPosition(Vec2(origin.x + visibleSize.width/2,
                                origin.y + visibleSize.height - label3->getContentSize().height - 100));

        // add the label as a child to this layer
        this->addChild(label3, 1);
    }
    
    
    return true;
}















void Scene2::menuCloseCallback(Ref* pSender)
{
    //Close the cocos2d-x game scene and quit the application
    Director::getInstance()->end();

    /*To navigate back to native iOS screen(if present) without quitting the application  ,do not use Director::getInstance()->end() as given above,instead trigger a custom event created in RootViewController.mm as below*/

    //EventCustom customEndEvent("game_scene_close_event");
    //_eventDispatcher->dispatchEvent(&customEndEvent);


}
