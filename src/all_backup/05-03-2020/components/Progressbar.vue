<template>
<div>
    <div class="progress">
       <div class="progress-bar" role="progressbar" aria-valuenow="70"
       aria-valuemin="0" aria-valuemax="100" :style="{width: (quotecount / maxquotes)*100 +'%'}">
       <span >{{quotecount}} / {{maxquotes}}</span>
       </div>
    </div>
</div>
</template>
<script>
export default {
    props: ['quotecount', 'maxquotes'],
}
</script>
<style>
.progress{    margin-top: 30px;
    margin-bottom: 25px;}
   
</style>