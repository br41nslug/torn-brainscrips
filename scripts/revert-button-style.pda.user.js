// ==UserScript==
// @name         BrainTools: Classic buttons (TornPDA)
// @namespace    brainslug.torn.tools
// @version      0.3
// @description  Reverts the recent button style change.
// @author       Brainslug [2323221]
// @match        https://www.torn.com/*
// @icon         https://www.google.com/s2/favicons?domain=torn.com
// ==/UserScript==

function removeStyles(files) {
    document.head.querySelectorAll('link[rel="stylesheet"]').forEach((elem) => {
        const href = elem.getAttribute('href');
        for (const file of files) {
            if (href.startsWith(file)) {
                elem.remove();
                break;
            }
        }
    });
}

function GM_addStyle(newStyles) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = newStyles;
    document.head.appendChild(style);
}

(function() {
    'use strict';
    removeStyles([
        '/css/style/buttons.css',
        '/css/style/buttons_inputs_react_compatibility.css',
        '/css/style/buttons_compatibility.css',
    ]);
    GM_addStyle(`.btn,.btn-wrap,button{background-color:transparent}.torn-btn,button{font-family:Arial,sans-serif}.btn,.btn-wrap,.torn-btn{text-decoration:none;height:auto}:root{--btn-disabled-color:#777;--btn-disabled-box-shadow:0 1px 0 #FFFFFFA6;--btn-disabled-text-shadow:0 -1px 0 #FFFFFF66;--btn-disabled-background:linear-gradient(180deg, #999999 0%, #CCCCCC 100%);--btn-orange-box-shadow:0 1px 0 #FFFFFF1A;--btn-gold-disabled-background:linear-gradient(180deg, #CECEBF 0%, #F0F0E1 100%);--btn-gold-disabled-color:#9B9B8C;--btn-gold-disabled-text-shadow:0 -1px 0 #FFFFFF73;--btn-grey-background:linear-gradient(180deg, #DEDEDE 0%, #F7F7F7 25%, #CFCFCF 60%, #E7E7E7 78%, #D9D9D9 100%);--btn-grey-border-color:#AAAAAA;--btn-grey-color:#888888;--btn-grey-text-shadow:0 1px 0 #FFFFFF40;--btn-grey-hover-background:linear-gradient(180deg, #CCCCCC 0%, #FFFFFF 25%, #BBBBBB 60%, #EEEEEE 78%, #BBBBBB 100%);--btn-grey-hover-border-color:#999999;--btn-grey-hover-color:#444444;--btn-grey-hover-text-shadow:0 0 5px #FFFFFF;--btn-grey-active-background:linear-gradient(180deg, #CCCCCC 0%, #FFFFFF 100%);--btn-grey-active-box-shadow:inset 0 1px 0 #00000012;--btn-grey-active-color:#444444;--btn-grey-active-text-shadow:0 0 5px #FFFFFF;--btn-grey-disabled-background:linear-gradient(180deg, #CCCCCC 0%, #FFFFFF 100%);--btn-grey-disabled-box-shadow:inset 0 1px 0 #00000012;--btn-grey-disabled-color:#BBBBBB;--btn-grey-disabled-text-shadow:0 -1px 0 #FFFFFF73}:root .dark-mode{--btn-disabled-color:#111;--btn-disabled-box-shadow:none;--btn-disabled-text-shadow:0 -1px 0 #FFFFFF1A;--btn-disabled-background:linear-gradient(180deg, #222222 0%, #666666 100%);--btn-orange-box-shadow:none;--btn-gold-disabled-background:linear-gradient(180deg, #222222 0%, #666666 100%);--btn-gold-disabled-color:#111;--btn-gold-disabled-text-shadow:0 -1px 0 #FFFFFF1A;--btn-grey-background:linear-gradient(180deg, #000000 0%, #555555 25%, #111111 60%, #333333 78%, #000000 100%);--btn-grey-border-color:#444444;--btn-grey-color:#DDDDDD;--btn-grey-text-shadow:0 0 2px #00000073;--btn-grey-hover-background:linear-gradient(180deg, #111111 0%, #666666 25%, #222222 60%, #444444 78%, #111111 100%);--btn-grey-hover-border-color:#444444;--btn-grey-hover-color:#FFFFFF;--btn-grey-hover-text-shadow:0 0 5px #FFFFFF40;--btn-grey-active-background:linear-gradient(180deg, #000000 0%, #333333 100%);--btn-grey-active-box-shadow:inset 0px -1px 0px #FFFFFF12;--btn-grey-active-color:#DDDDDD;--btn-grey-active-text-shadow:0 0 2px #00000073;--btn-grey-disabled-background:linear-gradient(180deg, #000000 0%, #333333 100%);--btn-grey-disabled-box-shadow:inset 0px -1px 0px #FFFFFF12;--btn-grey-disabled-color:#555555;--btn-grey-disabled-text-shadow:unset}.btn,.btn-wrap{background-image:none;padding-left:0;display:inline-block}button{border-color:transparent;font-size:12px;font-weight:400;color:#069}button:focus,button:hover{color:#999}.torn-btn{background:linear-gradient(180deg,#ccc 0,#999 60%,#666 100%) no-repeat;border-radius:5px;font-size:14px;font-weight:700;text-align:center;letter-spacing:0;color:#333;text-shadow:0 1px 0 #ffffff66;text-transform:uppercase;margin:0;border:none;outline:0;overflow:visible;box-sizing:border-box;line-height:16px;padding:4px 8px;white-space:nowrap;cursor:pointer}.torn-btn:focus{border:none}.torn-btn:focus,.torn-btn:hover{background:linear-gradient(180deg,#e5e5e5 0,#bbb 60%,#999 100%) no-repeat;color:#333}.torn-btn.disabled,.torn-btn:disabled,.torn-btn:hover.disabled,.torn-btn:hover:disabled{color:#777;color:var(--btn-disabled-color);box-shadow:0 1px 0 #ffffffa6;box-shadow:var(--btn-disabled-box-shadow);text-shadow:0 -1px 0 #ffffff66;text-shadow:var(--btn-disabled-text-shadow);background:linear-gradient(180deg,#999 0,#ccc 100%) no-repeat;cursor:default}.torn-btn.btn-dark-bg.disabled,.torn-btn.btn-dark-bg:disabled,.torn-btn.btn-dark-bg:hover.disabled,.torn-btn.btn-dark-bg:hover:disabled{color:#111;box-shadow:none;text-shadow:0 -1px 0 #ffffff1a;background:linear-gradient(180deg,#222 0,#666 100%) no-repeat}.torn-btn.btn-big{padding:9px 8px}.torn-btn.orange{background:linear-gradient(180deg,#c1660a 0,#c30 60%,#9e0b08 100%) no-repeat;color:#fff;text-shadow:0 1px 0 #66000066;box-shadow:0 1px 0 #ffffff1a;box-shadow:var(--btn-orange-box-shadow)}.torn-btn.btn-dark-bg.orange{box-shadow:none}.torn-btn.orange:hover{background:linear-gradient(180deg,#e5a119 0,#e52e19 60%,#b20000 100%) no-repeat}.torn-btn.orange.disabled,.torn-btn.orange:disabled,.torn-btn.orange:hover.disabled,.torn-btn.orange:hover:disabled{background:linear-gradient(180deg,#9e0b08 0,#c30 60%,#c1660a 100%) no-repeat;color:#510000;text-shadow:0 -1px 0 #ffffbf1a;box-shadow:none}.torn-btn.green{background:linear-gradient(180deg,#6eaa19 0,#4e7e0b 100%) no-repeat;color:#fff;box-shadow:0 1px 0 #ffffff1a;text-shadow:0 1px 0 #00000040}.torn-btn.gold,.torn-btn.grey{font-family:fjalla one,Arial,sans-serif;text-shadow:0 1px 0 #ffffff40;padding:4px 14px 3px;line-height:15px;font-weight:400}.torn-btn.green:hover{background:linear-gradient(180deg,#82c91e 0,#5c940d 100%) no-repeat;box-shadow:0 1px 0 #ffffff1a;text-shadow:0 0 10px #ffffffa6}.torn-btn.green.disabled,.torn-btn.green:disabled,.torn-btn.green:hover.disabled,.torn-btn.green:hover:disabled{background:linear-gradient(0deg,#619616 0,#456f0a 100%) no-repeat;color:#113719;text-shadow:0 -1px 0 #ffffff1a}.torn-btn.gold{background:linear-gradient(180deg,#d8dbdc 0,#fefbe4 25%,#d6cdc1 60%,#ebeceb 78%,#dad8c2 100%) no-repeat;border:1px solid #acac9d;color:#8a8a79}.torn-btn.gold:hover{background:linear-gradient(180deg,#bfc5c9 0,#fdf7cc 25%,#b4a592 60%,#d9dad9 78%,#bab794 100%) no-repeat;color:#575748;text-shadow:0 1px 0 #ffffff73}.torn-btn.gold.disabled,.torn-btn.gold:disabled,.torn-btn.gold:hover.disabled,.torn-btn.gold:hover:disabled{border:none;background:linear-gradient(180deg,#cecebf 0,#f0f0e1 100%) no-repeat;background:var(--btn-gold-disabled-background);box-shadow:0 1px 0 #ffffffa6;box-shadow:var(--btn-disabled-box-shadow);color:#9b9b8c;color:var(--btn-gold-disabled-color);text-shadow:0 -1px 0 #ffffff73;text-shadow:var(--btn-gold-disabled-text-shadow);cursor:default}.torn-btn.btn-dark-bg.gold.disabled,.torn-btn.btn-dark-bg.gold:disabled,.torn-btn.btn-dark-bg.gold:hover.disabled,.torn-btn.btn-dark-bg.gold:hover:disabled{background:linear-gradient(180deg,#222 0,#666 100%) no-repeat;color:#111;text-shadow:0 -1px 0 #ffffff1a;box-shadow:none}.torn-btn.gold.btn-big{padding:9px 14px 8px}.torn-btn.gold.btn-big.disabled,.torn-btn.gold.btn-big:disabled,.torn-btn.gold.btn-big:hover.disabled,.torn-btn.gold.btn-big:hover:disabled{padding:10px 15px 9px}.torn-btn.grey{background:linear-gradient(180deg,#dedede 0,#f7f7f7 25%,#cfcfcf 60%,#e7e7e7 78%,#d9d9d9 100%);background:var(--btn-grey-background);border:1px solid #aaa;border-color:var(--btn-grey-border-color);color:#888;color:var(--btn-grey-color);text-shadow:var(--btn-grey-text-shadow)}.torn-btn.grey:hover{background:linear-gradient(180deg,#ccc 0,#fff 25%,#bbb 60%,#eee 78%,#bbb 100%);background:var(--btn-grey-hover-background);border:1px solid #999;border-color:var(--btn-grey-hover-border-color);color:#444;color:var(--btn-grey-hover-color);text-shadow:0 0 5px #fff;text-shadow:var(--btn-grey-hover-text-shadow)}.torn-btn.grey:active{background:linear-gradient(180deg,#ccc 0,#fff 100%);background:var(--btn-grey-active-background);box-shadow:0 1px 0 #00000012;box-shadow:var(--btn-grey-active-box-shadow);color:#444;color:var(--btn-grey-active-color);text-shadow:0 0 5px #fff;text-shadow:var(--btn-grey-active-text-shadow);border:none;padding:5px 15px 4px}.torn-btn.grey.disabled,.torn-btn.grey:disabled,.torn-btn.grey:hover.disabled,.torn-btn.grey:hover:disabled{background:linear-gradient(180deg,#ccc 0,#fff 100%);background:var(--btn-grey-disabled-background);box-shadow:inset 0 1px 0 #00000012;box-shadow:var(--btn-grey-disabled-box-shadow);color:#bbb;color:var(--btn-grey-disabled-color);text-shadow:var(--btn-grey-disabled-text-shadow);text-shadow:none;border:none;cursor:default;padding:5px 14px 4px}.torn-btn.btn-dark-bg.grey{background:linear-gradient(180deg,#000 0,#555 25%,#111 60%,#333 78%,#000 100%);border:1px solid #444;color:#ddd;text-shadow:0 0 2px #00000073}.torn-btn.btn-dark-bg.grey:hover{background:linear-gradient(180deg,#111 0,#666 25%,#222 60%,#444 78%,#111 100%);border:1px solid #444;color:#fff;text-shadow:0 0 5px #ffffff40}.torn-btn.btn-dark-bg.grey:active{background:linear-gradient(180deg,#000 0,#333 100%);box-shadow:inset 0 -1px 0 #ffffff12;color:#ddd;text-shadow:0 0 2px #00000073;border:none}.torn-btn.btn-dark-bg.grey.disabled,.torn-btn.btn-dark-bg.grey:disabled,.torn-btn.btn-dark-bg.grey:hover.disabled,.torn-btn.btn-dark-bg.grey:hover:disabled{background:linear-gradient(180deg,#000 0,#333 100%);box-shadow:inset 0 -1px 0 #ffffff12;color:#555;text-shadow:unset;border:none}.torn-btn.grey.btn-big{padding:9px 11px 8px}.torn-btn.grey.btn-big.disabled,.torn-btn.grey.btn-big:active,.torn-btn.grey.btn-big:disabled,.torn-btn.grey.btn-big:hover.disabled,.torn-btn.grey.btn-big:hover:disabled{padding:10px 12px 9px}.torn-btn.black{background:linear-gradient(180deg,#555 0,#000 100%) no-repeat;color:#fff;text-shadow:none}.torn-btn.black:hover{background:linear-gradient(180deg,#777 0,#222 100%) no-repeat}.torn-btn.black.disabled,.torn-btn.black:disabled,.torn-btn.black:hover.disabled,.torn-btn.black:hover:disabled{background:no-repeat #000;color:#fff}.church-wrap .torn-btn.gold{font-size:30px;font-family:grusskartengotischregular,Arial,sans-serif;background:linear-gradient(180deg,#dee2e5 0,#e1e1e1 1%,#f0f0f0 25%,#ccc 59%,#ebebeb 78%,#ccc 100%) no-repeat;color:#555;text-shadow:0 0 5px #fff;font-weight:400;text-transform:none;padding:5px 15px;border:2px solid #999;box-shadow:none}.church-wrap .torn-btn.gold:hover{background:linear-gradient(180deg,#dee2e5 1%,#fffce4 25%,#d5ccc0 59%,#ecedee 78%,#d7d4ba 99%) no-repeat;border:2px solid #999;box-shadow:none}.church-wrap .torn-btn.gold.disabled,.church-wrap .torn-btn.gold:disabled{background:linear-gradient(180deg,#999 0,#ddd 100%) no-repeat;color:#777;text-shadow:0 -1px 0 #ffffff59}.church-wrap .torn-btn.gold.trim{border-top-left-radius:0;border-bottom-left-radius:0;padding:8px 15px;border:2px solid #999;box-shadow:none}@media screen and (max-width:1000px){.r.without-sidebar .torn-btn{padding:9px 10px}.r.without-sidebar .torn-btn.gold{padding:9px 14px 8px}.r.without-sidebar .torn-btn.gold.disabled,.r.without-sidebar .torn-btn.gold:disabled{padding:10px 15px 9px}}@media screen and (max-width:784px){.r .torn-btn{padding:9px 10px}.r .torn-btn.grey{padding:9px 10px 8px}.r .torn-btn.grey.disabled,.r .torn-btn.grey:active,.r .torn-btn.grey:disabled,.r .torn-btn.grey:hover.disabled,.r .torn-btn.grey:hover:disabled{padding:10px 11px 9px}.r .torn-btn.gold{padding:9px 14px 8px}.r .torn-btn.gold.disabled,.r .torn-btn.gold:disabled{padding:10px 15px 9px}}.d .church-wrap .form-wrap .letter.letter{vertical-align:baseline}`);
})();
