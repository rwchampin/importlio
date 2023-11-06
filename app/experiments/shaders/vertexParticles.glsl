uniform float time;
varying vec2 vUv;

varying vec4 vColor;
uniform sampler2D uPositions;
float PI = 3.1415926535897932384626433832795;
uniform vec2 uMouse;
void main() {
    vUv = uv;

    vec4 pos = texture2D(uPositions, uv);

    float angle = atan(pos.y, pos.x);

    vColor = 0.7 *  vec4(0.5 + 0.45*sin(angle+time*0.4));

    vec4 mvPosition = modelViewMatrix * vec4( pos.xyz, 1.0 );
    gl_PointSize = 1. * ( 1. / - mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;
}