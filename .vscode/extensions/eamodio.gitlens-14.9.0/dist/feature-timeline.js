exports.id=122,exports.ids=[122],exports.modules={9525:(t,e,i)=>{i.d(e,{TimelineWebviewProvider:()=>TimelineWebviewProvider});var n=i(1398),s=i(3807),o=i(4703),a=i(7931),r=i(5287),h=i(9634),d=i(7899),l=i(4832),u=i(1856),g=i(6707),p=i(560),c=i(4026),m=i(2471),v=i(5329),b=i(3355),C=i(7565),x=i(1500);let S=new b.m9("timeline/didChange"),_=new b.eF("timeline/point/open"),w=new b.eF("timeline/period/update");var f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,D=(t,e,i,n)=>{for(var s,o=n>1?void 0:n?y(e,i):e,a=t.length-1;a>=0;a--)(s=t[a])&&(o=(n?s(e,i,o):s(o))||o);return n&&o&&f(e,i,o),o};let TimelineWebviewProvider=class TimelineWebviewProvider{constructor(t,e){this.container=t,this.host=e,this._context={uri:void 0,period:"3|M",etagRepositories:this.container.git.etag,etagRepository:0,etagSubscription:this.container.subscription.etag},this._context={...this._context,...this._pendingContext},this._pendingContext=void 0,this.host.isHost("editor")?this._disposable=n.Disposable.from(this.container.subscription.onDidChange(this.onSubscriptionChanged,this),this.container.git.onDidChangeRepository(this.onRepositoryChanged,this)):(this.host.description="✨",this._disposable=n.Disposable.from(this.container.subscription.onDidChange(this.onSubscriptionChanged,this),this.container.git.onDidChangeRepository(this.onRepositoryChanged,this),this.container.git.onDidChangeRepositories(this.onRepositoriesChanged,this),n.window.onDidChangeActiveTextEditor((0,p.sg)(this.onActiveEditorChanged,250),this),this.container.events.on("file:selected",(0,p.sg)(this.onFileSelected,250),this)))}_bootstraping=!0;_context;_pendingContext;_disposable;dispose(){this._disposable.dispose()}onReloaded(){this.notifyDidChangeState(!0)}canReuseInstance(...t){let e;let[i]=t;return null!=i?i instanceof n.Uri?e=i:(0,v.k)(i)?e=i.uri:(0,x.c)(i)&&null!=i.state.uri&&(e=n.Uri.parse(i.state.uri)):e=n.window.activeTextEditor?.document.uri,e?.toString()===this._context.uri?.toString()||void 0}getSplitArgs(){return null!=this._context.uri?[this._context.uri]:[]}onShowing(t,e,...i){let[s]=i;return null!=s?s instanceof n.Uri?this.updatePendingUri(s):(0,v.k)(s)?this.updatePendingUri(s.uri):(0,x.c)(s)&&this.updatePendingContext({period:s.state.period,uri:null!=s.state.uri?n.Uri.parse(s.state.uri):void 0}):this.updatePendingEditor(n.window.activeTextEditor),t?(this._context={...this._context,...this._pendingContext},this._pendingContext=void 0):this.updateState(),!0}includeBootstrap(){return this._bootstraping=!0,this._context={...this._context,...this._pendingContext},this._pendingContext=void 0,this.getState(this._context)}registerCommands(){let t=[];return this.host.isHost("view")&&t.push((0,d.Lb)(`${this.host.id}.refresh`,()=>this.host.refresh(!0),this),(0,d.Lb)(`${this.host.id}.openInTab`,()=>{null!=this._context.uri&&(0,d.RS)(s.Ts.ShowInTimeline,this._context.uri)},this)),t}onVisibilityChanged(t){t&&(this.host.isHost("view")&&this.updatePendingEditor(n.window.activeTextEditor),(!this._bootstraping||(this._bootstraping=!1,null!=this._pendingContext&&"uri"in this._pendingContext))&&this.updateState())}onMessageReceived(t){switch(t.method){case _.method:(0,b.Q8)(_,t,async t=>{if(null==t.data||!t.data.selected||null==this._context.uri)return;let e=this.container.git.getRepository(this._context.uri);if(null==e)return;let i=await e.getCommit(t.data.id);null==i||(this.container.events.fire("commit:selected",{commit:i,interaction:"active",preserveFocus:!0,preserveVisibility:!1},{source:this.host.id}),this.container.commitDetailsView.ready||this.container.commitDetailsView.show({preserveFocus:!0},{commit:i,interaction:"active",preserveVisibility:!1}))});break;case w.method:(0,b.Q8)(w,t,t=>{this.updatePendingContext({period:t.period})&&this.updateState(!0)})}}onActiveEditorChanged(t){if(null!=t){if(!(0,m.ld)(t))return;this.container.git.isTrackable(t.document.uri)||(t=void 0)}this.updatePendingEditor(t)&&this.updateState()}onFileSelected(t){if(null==t.data)return;let e=t.data.uri;null==e||this.container.git.isTrackable(e)||(e=void 0),this.updatePendingUri(e)&&this.updateState()}onRepositoriesChanged(t){let e=this.updatePendingUri(this._context.uri);(this.updatePendingContext({etagRepositories:t.etag})||e)&&this.updateState()}onRepositoryChanged(t){t.changed(h.Z_.Heads,h.Z_.Index,h.Ti.Any)&&this.updatePendingContext({etagRepository:t.repository.etag})&&this.updateState()}onSubscriptionChanged(t){this.updatePendingContext({etagSubscription:t.etag})&&this.updateState()}async getState(t){let e=l.H.get("defaultDateFormat")??"MMMM Do, YYYY h:mma",i=l.H.get("defaultDateShortFormat")??"short",s=t.period??"3|M",h=null!=t.uri?await a.nk.fromUri(t.uri):void 0,d=h?.repoPath;this.host.isHost("editor")?this.host.title=null==h?this.host.originalTitle:`${this.host.originalTitle}: ${h.fileName}`:this.host.description=h?.fileName??"✨";let g=await this.container.git.access(o.k.Timeline,d);if(null==t.uri||null==h||null==d||!1===g.allowed){let n=await this.container.git.access(o.k.Timeline,d);return{...this.host.baseWebviewState,period:s,title:h?.relativePath,sha:h?.shortSha,uri:t.uri?.toString(),dateFormat:e,shortDateFormat:i,access:n}}let[p,m]=await Promise.all([this.container.git.getCurrentUser(d),this.container.git.getLogForFile(d,h.fsPath,{limit:0,ref:h.sha,since:(function(t){let e;if("all"==t)return;let[i,n]=t.split("|");switch(n){case"D":e=(0,u.Tl)(new Date,{days:-parseInt(i,10)});break;case"M":e=(0,u.Tl)(new Date,{months:-parseInt(i,10)});break;case"Y":e=(0,u.Tl)(new Date,{years:-parseInt(i,10)});break;default:e=(0,u.Tl)(new Date,{months:-3})}return e.getHours()>=12&&e.setDate(e.getDate()+1),e.setHours(0,0,0,0),e})(s)?.toISOString()})]);if(null==m)return{...this.host.baseWebviewState,dataset:[],period:s,title:h.relativePath,sha:h.shortSha,uri:t.uri.toString(),dateFormat:e,shortDateFormat:i,access:g};let v=[...(0,c.pb)(m.commits.values(),t=>t.file?.stats==null&&1!==(0,r.Zx)(t.stats?.changedFiles))];if(0!==v.length){let e=l.H.get("visualHistory.queryLimit")??20,i=this.container.git.getRepository(t.uri),s=i?.provider.name;v.length>e&&(n.window.showWarningMessage(`Unable able to show more than the first ${e} commits for the specified time period because of ${s?`${s} `:""}rate limits.`),v=v.slice(0,20)),await Promise.allSettled(v.map(t=>t.ensureFullDetails()))}let b=p?.name?`${p.name} (you)`:"You",C=[];for(let t of m.commits.values()){let e=t.file?.stats??(1===(0,r.Zx)(t.stats?.changedFiles)?t.stats:void 0);C.push({author:"You"===t.author.name?b:t.author.name,additions:e?.additions,deletions:e?.deletions,commit:t.sha,date:t.date.toISOString(),message:t.message??t.summary,sort:t.date.getTime()})}return C.sort((t,e)=>e.sort-t.sort),{...this.host.baseWebviewState,dataset:C,period:s,title:h.relativePath,sha:h.shortSha,uri:t.uri.toString(),dateFormat:e,shortDateFormat:i,access:g}}updatePendingContext(t,e){let[i,n]=(0,C.ql)(this._context,this._pendingContext,t,e);return i&&(this._pendingContext=n),i}updatePendingEditor(t,e){return!(null==t&&(0,m.dC)(this._context.uri??this._pendingContext?.uri))&&(null==t||!!(0,m.ld)(t))&&this.updatePendingUri(t?.document.uri,e)}updatePendingUri(t,e){let i;if(null!=t){let e=this.container.git.getRepository(t);i=e?.etag??0}else i=0;return this.updatePendingContext({uri:t,etagRepository:i},e)}_notifyDidChangeStateDebounced=void 0;updateState(t=!1){if(t){this.notifyDidChangeState();return}null==this._notifyDidChangeStateDebounced&&(this._notifyDidChangeStateDebounced=(0,p.sg)(this.notifyDidChangeState.bind(this),500)),this._notifyDidChangeStateDebounced()}async notifyDidChangeState(t=!1){let e;return this._notifyDidChangeStateDebounced?.cancel(),(!!t||null!=this._pendingContext)&&(null!=this._pendingContext?(e={...this._context,...this._pendingContext},this._context=e,this._pendingContext=void 0):e=this._context,this.host.notify(S,{state:await this.getState(e)}))}};D([(0,g.Yz)({args:!1})],TimelineWebviewProvider.prototype,"onActiveEditorChanged",1),D([(0,g.Yz)({args:!1})],TimelineWebviewProvider.prototype,"onFileSelected",1),D([(0,g.Yz)({args:!1})],TimelineWebviewProvider.prototype,"onRepositoriesChanged",1),D([(0,g.Yz)({args:!1})],TimelineWebviewProvider.prototype,"onRepositoryChanged",1),D([(0,g.Yz)({args:!1})],TimelineWebviewProvider.prototype,"onSubscriptionChanged",1),D([(0,g.Yz)({args:!1})],TimelineWebviewProvider.prototype,"getState",1),D([(0,g.Yz)()],TimelineWebviewProvider.prototype,"updateState",1),D([(0,g.Yz)()],TimelineWebviewProvider.prototype,"notifyDidChangeState",1)}};