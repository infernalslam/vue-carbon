export const theme = [
  { name: 'monokai' },
  { name: 'seti' },
  { name: 'cobalt' }
]
export const code = [
  { name: 'text/javascript' },
  { name: 'text/vue' }
]
export const simpleCode = `
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}`
export default {
  theme,
  code,
  simpleCode
}
