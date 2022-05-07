<template>
  <div class="create-post">
  </div>
</template>

<script>
import BlogCoverPreview from "@/components/BlogCoverPreview";
import Loading from "@/components/Loading";
import  firebase from 'firebase/app'
import 'firebase/storage'
import db from '../firebase/firebaseInit'
import Quill from 'quill'
window.Quill = Quill
const ImageResize = require('quill-image-resize-module').default
Quill.register('modules/imagesResize', ImageResize)

export default {
  name: "CreatePost.vue",
  components: {Loading, BlogCoverPreview},
  data() {
    return {
      file: null,
      error: null,
      errorMsg: null,
      loading: null,
      editorSettings: {
        modules: {
          imageResize: {}
        }
      }
    }
  },
  methods: {
    fileChange(){
      this.file = this.$refs.blogPhoto.files[0]
      const fileName = this.file.name
      this.$store.commit('fileNameChange', fileName)
      this.$store.commit('createFileURL', URL.createObjectURL(this.file))
    },
    openPreview(){
      this.$store.commit('openPhotoPreview')
    },
    imageHandler(file, Editor, cursorLocation, resetUploader){
      const storageRef = firebase.storage().ref()
      const docRef = storageRef.child(`documents/blogPostPhotos/${file.name}`)
      docRef.put(file).on(
          'state_changed',
          (snapshot)=>{
            console.log(snapshot)
          },
          (err)=> {
            console.log(err)
          },
          async ()=> {
            const downloadURL = await docRef.getDownloadURL()
            Editor.insertEmbed(cursorLocation, 'image', downloadURL)
            resetUploader()
          }
      )
    },
    uploadBlog(){
      if (this.blogTitle.length !== 0 && this.blogHTML.length !==0){
        if (this.file){
          this.loading = true
          const storageRef = firebase.storage().ref()
          const docRef = storageRef.child(`documents/BlogCoverPhoto/${this.$store.state.blogPhotoPhotoName}`)
          docRef.put(this.file).on(
              'state changed',
              (snapshot) => {
                console.log(snapshot)
              },
              (err)=> {
                console.log(err)
                this.loading = false
              }
          ),
          async ()=> {
            const downloadURL = await docRef.
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
