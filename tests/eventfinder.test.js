import { test, after, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { act, createElement } from 'react';
import { JSDOM } from 'jsdom';
const dom = new JSDOM('<div id="root"></div>', { url: 'http://localhost/events' });
Object.assign(globalThis, {window:dom.window,document:dom.window.document,IS_REACT_ACT_ENVIRONMENT:true});
const {createRoot}=await import('react-dom/client');
const server=await createServer({server:{middlewareMode:true,hmr:false,ws:false},appType:'custom',optimizeDeps:{noDiscovery:true,include:[]},define:{'import.meta.env.VITE_TICKETMASTER_API_KEY':JSON.stringify('test-key')}});
const {default:App}=await server.ssrLoadModule('/src/App.jsx');
const originalFetch=globalThis.fetch;
let root;
afterEach(async()=>{if(root)await act(async()=>root.unmount());root=null;});
after(async()=>{await server.close();dom.window.close();globalThis.fetch=originalFetch;});
async function mount(fetcher){window.history.replaceState({},'','/events');globalThis.fetch=fetcher;root=createRoot(document.getElementById('root'));await act(async()=>root.render(createElement(App)));}
const event={id:'event-1',name:'Community Sports Night',images:[{url:'https://example.test/event.jpg'}],dates:{start:{localDate:'2026-11-08'}},_embedded:{venues:[{name:'Community Hall'}]}};
test('API results render cards with detail links',async()=>{
 await mount(async url=>{assert.match(url,/apikey=test-key/);return {ok:true,json:async()=>({_embedded:{events:[event]}})};});
 assert.match(document.body.textContent,/Community Sports Night/);
 assert.equal(document.querySelector('.view-button').getAttribute('href'),'/events/event-1');
});
test('API errors are visible to users',async()=>{
 await mount(async()=>({ok:false,status:500}));
 assert.match(document.querySelector('[role="alert"]').textContent,/Failed to fetch events/);
});
test('empty response has an explicit empty state',async()=>{
 await mount(async()=>({ok:true,json:async()=>({})}));
 assert.match(document.body.textContent,/No upcoming events found/);
});
