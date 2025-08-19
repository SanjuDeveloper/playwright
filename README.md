# playwright
Playwright kisi bhi element m action performa krne se phle automatically wait krta h jb tk element load na ho jaye.
Auto wait k liye hme config file m globally wait define krna hot H  fir playwright automatically SAB element k liye utne hi time tk wait krt H.

=> Fleky test case ni hote h is m kyu ki is m autowait ki functionality hoti h

Playwright support multiple browsers,OS, programming languages. BUT Cypress m hm only javascript use kr skte h .

ADVANTAGE OFPLAYWRIGHT >

=> Tracing and debugging [Auto screenshot, auto recording after each and every test exection, and readable console we call it trace]
=> Network interception [ network tab ko automate kr skte h api's vgera.]
=> Browser contax management [ agr apne 1 bar browser m login kr liya to dusre test case m login rne ki need ni h aap uski cookie store kr k dusre browser m le ja skte h ]

=> CodeGen tool [ Playwright m hm code/script bhi generate kr skte h codegen tool k throught.]

==========================  INSTALLATION ====================

1. Install node.js and vs code in your machine
2. create a blank folder as playwright etc..
3. go to inside the blank folder
4. npn init playwright   [ hit this command]
note: agr node achhe se install ni ya env variabe set ni h to error aayegi 

========================= FOLDER STRUCTURE ======================

1. playwright.config.js  [ this is test runner file for playwright is m sari configurations hoti h like wait,browser etc..]
2. package.json  [ ye file sare node project m create hoti h is file m playwright ki dependancies ki information hoti h ]
3. log.json [ ignore this file]
4. node modules  [ all installed jar are present in this file]

=> test file ka name :  test.spec.js is trh hota h [ spec is liye likha h kyu ki test file ko spec file bolte h or ye nam easy to understand h playwright m]

======================================= FIRST TEST =======================
sabse phle 1 file create kro.
fir sab se upar playwright/test ko import krna hota h [ nodemodule se import hota h ye]
const {test} = require(@playwright/test);

test('testcase name', fnction(){
    // ye jo test likha h vo test package se aata h is liye hmne upar phle test package ko import kiya h .
    //yha pr scripr. likho 
});


=> playwright test Asyncronous hota h 
    : mtlb agr apke pas 2 step h. 1st open browser , 2nd enter url,
    : agr browser open hone m 2 sec. lg re h to playwright tb tk 2nd step run krega mtlb url enter krega fir test fail ho jayega.
    : is liye hm sabhi step se phle await likhte h playwright m
    : or agr hm await ka use kr re h to hm async bhi likhna hoga function k sath. ye rule hota h js ka.
EXAMPLE: 
    test('login test', async function(){

    });

    : agr function anonymous h mtlb function ka koi name ni h to aap [ async () => {  }  ]  is trh bhi likh skte h // mtlb arrow function

 => playwright m kuchh global fixture hote h nodemodule package k ander jese browser, page etc.
=> Fixture mtlb global variable jo ki playwright m globally khi bhi use ho skte h 

=> browser open krne k liye ?
    browser.newContext('context name');
    :newContext()  mtlb fresh bew browser. or contextname m hm vo value dalenge jo hme browser k sath chahiye like koi cookie,session, plugin.
    : like agr hmne 1 bar login kr lya or ab hm new tab m same application open kr re h to hm ab bina logi kre aage badh skte h. kyu ki jb hmne phle login kiya tha us ka cookis hm is newContext('cookee'). m pass kr denge.

=> Playwright m apko test knse browser m run krna h uski information apko  playwright.config.json m deno hogi h. use[] array k ander.

*********  EXAMPLE CODE *****
const {test} = require ("@playwright/test");

test('Browser Fixture test', async ({browser})=> {
    // {browser}  ye fixture h mtlb global variable.
    // test annotation h 
    const context = browser.newContext();
    const page = context.newPage();
    await page.goto("URL");
});

=> Agr apke test m browser k sath bydefault koi cookie, session ya plugin kuchh ni chahoye to aap browser fixture ki jgh page fixture ka use kre
: Fir hme newContext  or context.newpage  ye code likhne ki need ni h .

        EXAMPLE:
            test('Page fixture Test', async ({page})=>{
                page.goto("url");
            });