<template>
    <div class="gw-activity-indicator">
        <div class="gw-activity-indicator-inner">
            <div class="gw-activity-indicator-bounce1" v-bind:style="style"></div>
            <div class="gw-activity-indicator-bounce2" v-bind:style="style"></div>
            <div class="gw-activity-indicator-bounce3" v-bind:style="style"></div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        const size = (this.$attrs.size ? this.$attrs.size.replace(/^(\d+)(px|\%)/, '') + 'px' : '18px');

        return {
            style: {
                'width': size,
                'height': size,
                'background-color': this.$attrs.color || 'black'
            }
        }
    }

}
</script>

<style>
.gw-activity-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.gw-activity-indicator-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}

.gw-activity-indicator-inner > div {
    width: 18px;
    height: 18px;
    background-color: black;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.gw-activity-indicator .gw-activity-indicator-bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.gw-activity-indicator .gw-activity-indicator-bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
    0%, 80%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    } 40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
}
</style>
