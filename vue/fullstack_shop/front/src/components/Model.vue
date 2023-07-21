<template>
  <Transition name="fade">
    <div class="wrapper" @click.stop="hide">
      <div class="canvas-container" ref="canvasDom"></div>
    </div>
  </Transition>
</template>

<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ref, onMounted } from 'vue';
// GLTF 模型文件的格式
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// 解码器
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useRoute } from 'vue-router';

const route = useRoute()
const { id } = route.params

const canvasDom = ref(null)

//场景
const scene = new THREE.Scene()
//渲染器
//setAlpha让其可设置透明度
const renderer = new THREE.WebGLRenderer({ antialias: true, setAlpha: true })  
renderer.setSize(window.innerWidth, window.innerHeight)
//镜头
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(10, 10, 10)
camera.lookAt(0, 0, 0)
const controls = new OrbitControls(camera, renderer.domElement)

// 渲染函数
const render = () => {
  renderer.render(scene, camera)
  controls.update()
  requestAnimationFrame(render)
}

onMounted(() => {
  //渲染
  canvasDom.value.appendChild(renderer.domElement)
  // 设置背景颜色并启用透明度
  renderer.setClearColor(0x000000, 0.2);
  render()

  //网格地面
  const gridHelper = new THREE.GridHelper(80)
  gridHelper.material.transparent = true
  gridHelper.material.opacity = 0
  scene.add(gridHelper)

  //加载gltf模型
  const loader = new GLTFLoader()
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('../../public/draco/gltf/')
  loader.setDRACOLoader(dracoLoader)

  //判断../../public/model/${id}.glb是否存在，不存在则不加载
  loader.load(`../../public/model/${id}.glb`, (gltf) => {  
    //传id让其点击不同商品展示不同模型 id对应商品的id
    // console.log(gltf.scene);
    const bmw = gltf.scene
    bmw.scale.set(0.2, 0.2, 0.2); //模型缩放
    scene.add(bmw) //将整个模型组添加到场景中
  })

});

//灯光
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0, 0, 10)
scene.add(light)
const light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(0, 0, -10);
scene.add(light2);
const light3 = new THREE.DirectionalLight(0xffffff, 1);
light3.position.set(10, 0, 0);
scene.add(light3);
const light4 = new THREE.DirectionalLight(0xffffff, 1);
light4.position.set(-10, 0, 0);
scene.add(light4);
const light5 = new THREE.DirectionalLight(0xffffff, 1);
light5.position.set(0, 10, 0);
scene.add(light5);
const light6 = new THREE.DirectionalLight(0xffffff, 0.3);
light6.position.set(5, 10, 0);
scene.add(light6);
const light7 = new THREE.DirectionalLight(0xffffff, 0.3);
light7.position.set(0, 10, 5);
scene.add(light7);
const light8 = new THREE.DirectionalLight(0xffffff, 0.3);
light8.position.set(0, 10, -5);
scene.add(light8);
const light9 = new THREE.DirectionalLight(0xffffff, 0.3);
light9.position.set(-5, 10, 0);
scene.add(light9);


//创建一个事件名hidden
const emits = defineEmits(['hidden'])  //子父通信
const hide = () => {
  //发散出去一个事件hidden 且携带一个参数值false
  emits('hidden', false)
}


</script>

<style lang="less" scoped>
.wrapper {
  position: absolute;
  top: 44px;
  height: 100%;

  .canvas-container {
    width: 100%;
    height: 100%;
  }

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
    background: #ffffff;
  }

  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 0.5s ease
  }

}
</style>