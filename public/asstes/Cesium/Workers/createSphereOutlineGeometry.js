define(["./when-b60132fc","./Cartographic-3309dd0d","./Check-7b2a090c","./EllipsoidOutlineGeometry-aeb4ab9a","./Math-119be1a3","./arrayFill-4513d7ad","./buildModuleUrl-57a32107","./Cartesian2-47311507","./Matrix4-cde86d0e","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./ComponentDatatype-c140a87d","./GeometryAttribute-c42d25b7","./FeatureDetection-c3b71206","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./IndexDatatype-8a5eead4"],(function(e,i,t,a,r,n,o,s,d,l,u,c,p,m,y,b,G,f){"use strict";function k(t){var r=e.defaultValue(t.radius,1),n={radii:new i.Cartesian3(r,r,r),stackPartitions:t.stackPartitions,slicePartitions:t.slicePartitions,subdivisions:t.subdivisions};this._ellipsoidGeometry=new a.EllipsoidOutlineGeometry(n),this._workerName="createSphereOutlineGeometry"}k.packedLength=a.EllipsoidOutlineGeometry.packedLength,k.pack=function(e,i,t){return a.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};var v=new a.EllipsoidOutlineGeometry,O={radius:void 0,radii:new i.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return k.unpack=function(t,r,n){var o=a.EllipsoidOutlineGeometry.unpack(t,r,v);return O.stackPartitions=o._stackPartitions,O.slicePartitions=o._slicePartitions,O.subdivisions=o._subdivisions,e.defined(n)?(i.Cartesian3.clone(o._radii,O.radii),n._ellipsoidGeometry=new a.EllipsoidOutlineGeometry(O),n):(O.radius=o._radii.x,new k(O))},k.createGeometry=function(e){return a.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(i,t){return e.defined(t)&&(i=k.unpack(i,t)),k.createGeometry(i)}}));
