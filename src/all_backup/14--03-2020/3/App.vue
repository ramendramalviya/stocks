<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                     <option value="slide">Slide</option>
                </select>
               <button class="btn btn-primary" @click="show = !show">Alert</button>
               <hr>
               <transition :name="alertAnimation">
                <div class="alert alert-info" v-if="show">This is some info select</div>   
               </transition>
                <transition appear enter-active-class="animated bounce" leave-active-class="animated shake">
                <div class="alert alert-info" v-if="show">This is some info</div>   
               </transition>
               
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            show: false,
            alertAnimation: 'fade',
            }
        }
    }
</script>

<style>
.fade-enter{
opacity: 0;
}
.fade-enter-active{
transition: opacity 1s;   
}
.fade-leave{
    
}
.fade-leave-active++++++{
transition: opacity 1s; 
opacity : 0;
}

/* Slide effect    */
.slide-enter{
    opacity: 0;

}
.slide-enter-active{
animation: slide-in 1s ease-out forwards;
transition: opacity .5s;
}
.slide-leave{

}
.slide-leave-active{
animation: slide-out 1s ease-out forwards;
transition: opacity .5s;
opacity: 0;
}
@keyframes slide-in {
    from{
        transform: translateY(20px);
    }
    to{
        transform: translateY(0);
    }
}
@keyframes slide-out {
    from{
        transform: translateY(20px);
    }
    to{
        transform: translateY(0);
    }
}
</style>
+

