(()=>{"use strict";const e=new class{events={};publish(e,t){if(console.log(`publish called for event ${e} with data ${JSON.stringify(t)}`),this.events[e])for(let n of this.events[e])console.log(`calling ${n} for ${e}`),n(t)}subscribe(e,t){console.log(`subscribe: ${e}, ${t}`),this.events[e]||(this.events[e]=[]),this.events[e].push(t),console.log(`${t} subscribed to ${e}`)}unsubscribe(e,t){this.events[e]&&this.events[e].remove(this.events[e].find((e=>e===t)))}};class t{constructor(e,t,n,c,s){this.id=e,this.title=t,this.description=n,this.dueDate=c,this.isComplete=!1,this.projectId=s||1}}const n=[];function c(e,c,s){const o=0===(d=n).length?1:d.reduce(((e,t)=>e.id<t.value?t:e)).id+1;var d;const i=new t(o,e,c,s);return n.push(i),i}function s(){return n}const o=new class{render(e){const t=function(e){return n.find((t=>t.id===e))}(e);if(!t)return;const c=document.createElement("div"),s=document.createElement("h2");s.textContent=t.title;const o=document.createElement("div"),d=document.createElement("div");d.textContent=t.description,o.appendChild(d);const i=document.createElement("div");i.textContent=t.dueDate,o.appendChild(i);const a=document.createElement("div");return a.textContent=t.isComplete,o.appendChild(a),c.appendChild(s),c.appendChild(o),c}},d=[new class{constructor(e,t){this.id=e,this.name=t}}(1,"Default")];function i(){return d}const a=new class{render(){const e=i(),t=document.createElement("div");t.classList.add("project-list-container");const n=document.createElement("h2");n.textContent="Projects";const c=document.createElement("ul");c.classList.add("project-list");for(let t of e){const e=document.createElement("li");e.classList.add("project-list-item");const n=document.createElement("a");n.href="#",n.textContent=t.name,n.addEventListener("click",(e=>this.onProjectLinkClick(e,t))),e.appendChild(n),c.appendChild(e)}return t.appendChild(n),t.appendChild(c),t}onProjectLinkClick(t,n){t.preventDefault(),console.log({project:n}),e.publish("changePage",{page:"ProjectDetail",data:1})}},l=new class{pageLinks=[{name:"Projects",page:"ProjectList"}];render(){const e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("ul");n.classList.add("header-links");for(let e of this.pageLinks){const t=document.createElement("li");t.classList.add("header-link-item");const c=document.createElement("a");c.href="#",c.textContent=e.name,c.addEventListener("click",(t=>this.onHeaderLinkClick(t,e))),t.appendChild(c),n.appendChild(t)}return t.appendChild(n),e.appendChild(t),e}onHeaderLinkClick(t,n){t.preventDefault(),e.publish("changePage",{page:n.page})}},r=new class{render(e){const t=function(e){return d.find((t=>t.id===e))}(e),n=(c=e,s().filter((e=>e.projectId===c)));var c;console.table(n);const o=document.createElement("div");o.classList.add("project-detail");const i=document.createElement("h2");i.textContent=t.name||"Project Details",o.appendChild(i);const a=document.createElement("div");a.classList.add("todo-items-container");for(let e of n){const t=document.createElement("div");t.classList.add("todo-item");const n=document.createElement("h3");n.textContent=e.title,t.appendChild(n);const c=document.createElement("div");c.textContent=`Due date: ${e.dueDate}`,t.appendChild(c),a.appendChild(t)}return o.appendChild(a),o}};console.log("TodoList app loaded"),c("Test","Test Description","2022-12-29"),c("Test2","Test Description 2","2022-12-30"),console.table(s());const p={TodoItemDetail:o,ProjectList:a,ProjectDetail:r};e.subscribe("changePage",m),document.body.appendChild(l.render());const u=document.createElement("div");function m(e){console.log(e),e.page&&p[e.page]&&(u.innerHTML="",u.appendChild(p[e.page].render(e.data)))}u.classList.add("main-content"),document.body.appendChild(u),m({page:"ProjectList"})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JCLFFBQVF1RSxNQUFNekMsS0FFZCxNQUFNOEMsRUFBUSxDQUNWLGVBQWtCLEVBQ2xCLFlBQWUsRUFDZixjQUFnQixHQUdwQixZQUFpQixhQUFjQyxHQUUvQjFDLFNBQVMyQyxLQUFLckMsWUFBWSxZQUMxQixNQUFNc0MsRUFBYzVDLFNBQVNDLGNBQWMsT0FJM0MsU0FBU3lDLEVBQVc5RSxHQUNoQkMsUUFBUUMsSUFBSUYsR0FDUEEsRUFBSzZELE1BQVNnQixFQUFNN0UsRUFBSzZELFFBSTlCbUIsRUFBWUMsVUFBWSxHQUN4QkQsRUFBWXRDLFlBQVltQyxFQUFNN0UsRUFBSzZELE1BQU03QixPQUFPaEMsRUFBS0EsT0FDekQsQ0FYQWdGLEVBQVkvQixVQUFVQyxJQUFJLGdCQUMxQmQsU0FBUzJDLEtBQUtyQyxZQUFZc0MsR0FZMUJGLEVBQVcsQ0FDUGpCLEtBQU0sZSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9QdWJTdWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1RvZG9JdGVtL1RvZG9JdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9Ub2RvSXRlbS9Ub2RvSXRlbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1RvZG9JdGVtL1RvZG9JdGVtRGV0YWlsLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0L1Byb2plY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0L1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QvUHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9tb2R1bGVzL0xheW91dC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QvUHJvamVjdERldGFpbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdFRvZG9JdGVtTWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQdWJTdWIge1xyXG4gICAgZXZlbnRzID0ge307XHJcblxyXG4gICAgcHVibGlzaChldmVudCwgZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBwdWJsaXNoIGNhbGxlZCBmb3IgZXZlbnQgJHtldmVudH0gd2l0aCBkYXRhICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YClcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBsaXN0ZW5lciBvZiB0aGlzLmV2ZW50c1tldmVudF0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGNhbGxpbmcgJHtsaXN0ZW5lcn0gZm9yICR7ZXZlbnR9YClcclxuICAgICAgICAgICAgbGlzdGVuZXIoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZShldmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc3Vic2NyaWJlOiAke2V2ZW50fSwgJHtjYWxsYmFja31gKVxyXG4gICAgICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2NhbGxiYWNrfSBzdWJzY3JpYmVkIHRvICR7ZXZlbnR9YClcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZShldmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ucmVtb3ZlKFxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uZmluZChsaXN0ZW5lciA9PiBsaXN0ZW5lciA9PT0gY2FsbGJhY2spXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFB1YlN1YigpOyIsImV4cG9ydCBjbGFzcyBUb2RvSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0SWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkIHx8IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gXCIuL1RvZG9JdGVtXCI7XHJcbmltcG9ydCB7IGdldE5leHRJZCB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5jb25zdCB0b2RvSXRlbXMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xyXG4gICAgY29uc3QgbmV3SWQgPSBnZXROZXh0SWQodG9kb0l0ZW1zKTtcclxuICAgIGNvbnN0IG5ld1RvZG9JdGVtID0gbmV3IFRvZG9JdGVtKG5ld0lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpO1xyXG4gICAgdG9kb0l0ZW1zLnB1c2gobmV3VG9kb0l0ZW0pO1xyXG4gICAgcmV0dXJuIG5ld1RvZG9JdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb2RvSXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdG9kb0l0ZW1zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb2RvSXRlbUJ5SWQoaWQpIHtcclxuICAgIHJldHVybiB0b2RvSXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkVG9kb0l0ZW0sIGdldFRvZG9JdGVtcywgZ2V0VG9kb0l0ZW1CeUlkIH07IiwiZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRJZChhcnIpIHtcclxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgocHJldmlvdXMsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXh0ID0gcHJldmlvdXMuaWQgPCBpdGVtLnZhbHVlID8gaXRlbSA6IHByZXZpb3VzXHJcbiAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICB9KS5pZCArIDE7XHJcbn0iLCJpbXBvcnQgeyBnZXRUb2RvSXRlbUJ5SWQgfSBmcm9tIFwiLi9Ub2RvSXRlbUNvbnRyb2xsZXJcIjtcclxuY2xhc3MgVG9kb0l0ZW1EZXRhaWwge1xyXG4gICAgcmVuZGVyKGlkKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBnZXRUb2RvSXRlbUJ5SWQoaWQpO1xyXG4gICAgICAgIGlmICghdG9kb0l0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b2RvSXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdG9kb0l0ZW1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHRvZG9JdGVtSGVhZGVyLnRleHRDb250ZW50ID0gdG9kb0l0ZW0udGl0bGU7XHJcbiAgICBcclxuICAgICAgICBjb25zdCB0b2RvSXRlbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdG9kb0l0ZW0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgdG9kb0l0ZW1Db250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5kdWVEYXRlO1xyXG4gICAgICAgIHRvZG9JdGVtQ29udGVudC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNDb21wbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlzQ29tcGxldGVEaXYudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5pc0NvbXBsZXRlO1xyXG4gICAgICAgIHRvZG9JdGVtQ29udGVudC5hcHBlbmRDaGlsZChpc0NvbXBsZXRlRGl2KTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHRvZG9JdGVtRGl2LmFwcGVuZENoaWxkKHRvZG9JdGVtSGVhZGVyKTtcclxuICAgICAgICB0b2RvSXRlbURpdi5hcHBlbmRDaGlsZCh0b2RvSXRlbUNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHRvZG9JdGVtRGl2O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVG9kb0l0ZW1EZXRhaWwoKTsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBnZXROZXh0SWQgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICBuZXcgUHJvamVjdCgxLCBcIkRlZmF1bHRcIiksXHJcbl07XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcclxuICAgIGNvbnN0IG5ld0lkID0gZ2V0TmV4dElkKHByb2plY3RzKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdJZCwgbmFtZSk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0QnlJZChpZCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBpZCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZFByb2plY3QsIGdldFByb2plY3RzLCBnZXRQcm9qZWN0QnlJZCB9IiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSBcIi4vUHJvamVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IFB1YlN1YiBmcm9tIFwiLi4vUHViU3ViXCI7XHJcbmNsYXNzIFByb2plY3RMaXN0IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgcHJvamVjdExpc3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0Jyk7XHJcbiAgICBcclxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0LWl0ZW0nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGluay5ocmVmPVwiI1wiO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGluay50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgICAgICAgICAgcHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5vblByb2plY3RMaW5rQ2xpY2soZSwgcHJvamVjdCkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0SGVhZGVyKTtcclxuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gcHJvamVjdExpc3RDb250YWluZXJEaXY7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qcm9qZWN0TGlua0NsaWNrKGUsIHByb2plY3QpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coe3Byb2plY3R9KTtcclxuICAgICAgICBQdWJTdWIucHVibGlzaCgnY2hhbmdlUGFnZScsIHtcclxuICAgICAgICAgICAgcGFnZTogJ1Byb2plY3REZXRhaWwnLFxyXG4gICAgICAgICAgICBkYXRhOiAxLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9qZWN0TGlzdCgpOyIsImltcG9ydCBQdWJTdWIgZnJvbSBcIi4uL1B1YlN1YlwiO1xyXG5cclxuY2xhc3MgSGVhZGVyIHtcclxuICAgIHBhZ2VMaW5rcyA9IFtcclxuICAgICAgICB7bmFtZTogJ1Byb2plY3RzJyxwYWdlOiAnUHJvamVjdExpc3QnfVxyXG4gICAgXVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbGlua3MnKTtcclxuICAgICAgICBmb3IgKGxldCBwYWdlIG9mIHRoaXMucGFnZUxpbmtzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxpbmstaXRlbScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW1MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBsaXN0SXRlbUxpbmsuaHJlZiA9ICcjJztcclxuICAgICAgICAgICAgbGlzdEl0ZW1MaW5rLnRleHRDb250ZW50ID0gcGFnZS5uYW1lO1xyXG4gICAgICAgICAgICBsaXN0SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5vbkhlYWRlckxpbmtDbGljayhlLCBwYWdlKSk7XHJcbiAgICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RJdGVtTGluayk7XHJcblxyXG4gICAgICAgICAgICBsaW5rcy5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChsaW5rcyk7XHJcblxyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZWFkZXJMaW5rQ2xpY2soZSwgbmV3UGFnZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBQdWJTdWIucHVibGlzaCgnY2hhbmdlUGFnZScsIHtwYWdlOiBuZXdQYWdlLnBhZ2V9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEhlYWRlcigpOyIsImltcG9ydCB7IGdldFRvZG9JdGVtc0ZvclByb2plY3QgfSBmcm9tIFwiLi4vUHJvamVjdFRvZG9JdGVtTWVkaWF0b3JcIjtcclxuaW1wb3J0IHsgZ2V0UHJvamVjdEJ5SWQgfSBmcm9tIFwiLi9Qcm9qZWN0Q29udHJvbGxlclwiO1xyXG5cclxuY2xhc3MgUHJvamVjdERldGFpbCB7XHJcbiAgICByZW5kZXIoaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQoaWQpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9JdGVtcyA9IGdldFRvZG9JdGVtc0ZvclByb2plY3QoaWQpO1xyXG4gICAgICAgIGNvbnNvbGUudGFibGUodG9kb0l0ZW1zKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdERldGFpbERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRldGFpbCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHByb2plY3REZXRhaWxIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWUgfHwgJ1Byb2plY3QgRGV0YWlscyc7XHJcbiAgICAgICAgcHJvamVjdERldGFpbERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGV0YWlsSGVhZGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb0l0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdG9kb0l0ZW1zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbXMtY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHRvZG9JdGVtIG9mIHRvZG9JdGVtcykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvSXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0b2RvSXRlbURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICAgICAgdG9kb0l0ZW1IZWFkZXIudGV4dENvbnRlbnQgPSB0b2RvSXRlbS50aXRsZTtcclxuICAgICAgICAgICAgdG9kb0l0ZW1EaXYuYXBwZW5kQ2hpbGQodG9kb0l0ZW1IZWFkZXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW1EdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRvZG9JdGVtRHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IGBEdWUgZGF0ZTogJHt0b2RvSXRlbS5kdWVEYXRlfWA7XHJcbiAgICAgICAgICAgIHRvZG9JdGVtRGl2LmFwcGVuZENoaWxkKHRvZG9JdGVtRHVlRGF0ZURpdik7XHJcblxyXG4gICAgICAgICAgICB0b2RvSXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0l0ZW1EaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvamVjdERldGFpbERpdi5hcHBlbmRDaGlsZCh0b2RvSXRlbXNDb250YWluZXIpO1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0RGV0YWlsRGl2O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvamVjdERldGFpbCgpOyIsImltcG9ydCB7IGdldFRvZG9JdGVtcyB9IGZyb20gXCIuL1RvZG9JdGVtL1RvZG9JdGVtQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9JdGVtc0ZvclByb2plY3QocHJvamVjdElkKSB7XHJcbiAgICByZXR1cm4gZ2V0VG9kb0l0ZW1zKCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9qZWN0SWQgPT09IHByb2plY3RJZCk7XHJcbn0iLCJpbXBvcnQgUHViU3ViIGZyb20gJy4vbW9kdWxlcy9QdWJTdWInO1xyXG5pbXBvcnQgeyBhZGRUb2RvSXRlbSwgZ2V0VG9kb0l0ZW1CeUlkLCBnZXRUb2RvSXRlbXMgfSBmcm9tICcuL21vZHVsZXMvVG9kb0l0ZW0vVG9kb0l0ZW1Db250cm9sbGVyJztcclxuaW1wb3J0IFRvZG9JdGVtRGV0YWlsIGZyb20gJy4vbW9kdWxlcy9Ub2RvSXRlbS9Ub2RvSXRlbURldGFpbCc7XHJcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tICcuL21vZHVsZXMvUHJvamVjdC9Qcm9qZWN0TGlzdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9tb2R1bGVzL0xheW91dC9oZWFkZXInO1xyXG5pbXBvcnQgUHJvamVjdERldGFpbCBmcm9tICcuL21vZHVsZXMvUHJvamVjdC9Qcm9qZWN0RGV0YWlsJztcclxuY29uc29sZS5sb2coJ1RvZG9MaXN0IGFwcCBsb2FkZWQnKTtcclxuYWRkVG9kb0l0ZW0oXCJUZXN0XCIsIFwiVGVzdCBEZXNjcmlwdGlvblwiLCBcIjIwMjItMTItMjlcIik7XHJcbmFkZFRvZG9JdGVtKFwiVGVzdDJcIiwgXCJUZXN0IERlc2NyaXB0aW9uIDJcIiwgXCIyMDIyLTEyLTMwXCIpO1xyXG5jb25zb2xlLnRhYmxlKGdldFRvZG9JdGVtcygpKTtcclxuXHJcbmNvbnN0IHBhZ2VzID0ge1xyXG4gICAgXCJUb2RvSXRlbURldGFpbFwiOiBUb2RvSXRlbURldGFpbCxcclxuICAgIFwiUHJvamVjdExpc3RcIjogUHJvamVjdExpc3QsXHJcbiAgICBcIlByb2plY3REZXRhaWxcIjpQcm9qZWN0RGV0YWlsLFxyXG59XHJcblxyXG5QdWJTdWIuc3Vic2NyaWJlKCdjaGFuZ2VQYWdlJywgY2hhbmdlUGFnZSk7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEhlYWRlci5yZW5kZXIoKSk7XHJcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVBhZ2UoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBpZiAoIWRhdGEucGFnZSB8fCAhcGFnZXNbZGF0YS5wYWdlXSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZXNbZGF0YS5wYWdlXS5yZW5kZXIoZGF0YS5kYXRhKSk7XHJcbn1cclxuXHJcbmNoYW5nZVBhZ2Uoe1xyXG4gICAgcGFnZTogXCJQcm9qZWN0TGlzdFwiXHJcbn0pO1xyXG4vL2NoYW5nZVBhZ2UoVG9kb0l0ZW1EZXRhaWwsIDEpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImV2ZW50cyIsInB1Ymxpc2giLCJldmVudCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoaXMiLCJsaXN0ZW5lciIsInN1YnNjcmliZSIsImNhbGxiYWNrIiwicHVzaCIsInVuc3Vic2NyaWJlIiwicmVtb3ZlIiwiZmluZCIsIlRvZG9JdGVtIiwiY29uc3RydWN0b3IiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJvamVjdElkIiwiaXNDb21wbGV0ZSIsInRvZG9JdGVtcyIsImFkZFRvZG9JdGVtIiwibmV3SWQiLCJhcnIiLCJsZW5ndGgiLCJyZWR1Y2UiLCJwcmV2aW91cyIsIml0ZW0iLCJ2YWx1ZSIsIm5ld1RvZG9JdGVtIiwiZ2V0VG9kb0l0ZW1zIiwicmVuZGVyIiwidG9kb0l0ZW0iLCJnZXRUb2RvSXRlbUJ5SWQiLCJ0b2RvSXRlbURpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRvZG9JdGVtSGVhZGVyIiwidGV4dENvbnRlbnQiLCJ0b2RvSXRlbUNvbnRlbnQiLCJkZXNjcmlwdGlvbkRpdiIsImFwcGVuZENoaWxkIiwiZHVlRGF0ZURpdiIsImlzQ29tcGxldGVEaXYiLCJwcm9qZWN0cyIsIm5hbWUiLCJnZXRQcm9qZWN0cyIsInByb2plY3RMaXN0Q29udGFpbmVyRGl2IiwiY2xhc3NMaXN0IiwiYWRkIiwicHJvamVjdExpc3RIZWFkZXIiLCJwcm9qZWN0TGlzdCIsInByb2plY3QiLCJwcm9qZWN0TGlzdEl0ZW0iLCJwcm9qZWN0TGluayIsImhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm9uUHJvamVjdExpbmtDbGljayIsInByZXZlbnREZWZhdWx0IiwicGFnZSIsInBhZ2VMaW5rcyIsImhlYWRlciIsIm5hdiIsImxpbmtzIiwibGlzdEl0ZW0iLCJsaXN0SXRlbUxpbmsiLCJvbkhlYWRlckxpbmtDbGljayIsIm5ld1BhZ2UiLCJnZXRQcm9qZWN0QnlJZCIsImZpbHRlciIsInRhYmxlIiwicHJvamVjdERldGFpbERpdiIsInByb2plY3REZXRhaWxIZWFkZXIiLCJ0b2RvSXRlbXNDb250YWluZXIiLCJ0b2RvSXRlbUR1ZURhdGVEaXYiLCJwYWdlcyIsImNoYW5nZVBhZ2UiLCJib2R5IiwibWFpbkNvbnRlbnQiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9