<template>

    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
               <slot></slot>
            </div>
        </div>

    </div>
</template>

<script>

</script>

<style>
.panel-body {
    color: #6e6e6e;
    font-size: 20px;
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
    margin-bottom: 5px;
}
.quote{cursor: pointer;}
.quote:hover{background-color: #ffe2e2;}

</style>