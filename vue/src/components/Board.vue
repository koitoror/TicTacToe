<template>
    <div class="board">
        <div>

            <div class="row">
                <Square @click.native="() => onSquareClick(0)" :value="currentBoard[0]" />
                <Square @click.native="() => onSquareClick(1)" :value="currentBoard[1]" />
                <Square @click.native="() => onSquareClick(2)" :value="currentBoard[2]" />
            </div>

            <div class="row">
                <Square @click.native="() => onSquareClick(3)" :value="currentBoard[3]" />
                <Square @click.native="() => onSquareClick(4)" :value="currentBoard[4]" />
                <Square @click.native="() => onSquareClick(5)" :value="currentBoard[5]" />
            </div>

            <div class="row">
                <Square @click.native="() => onSquareClick(6)" :value="currentBoard[6]" />
                <Square @click.native="() => onSquareClick(7)" :value="currentBoard[7]" />
                <Square @click.native="() => onSquareClick(8)" :value="currentBoard[8]" />
            </div>

        </div>
        
    </div>
</template>

<script>

import Square from '@/components/Square.vue';

export default {
    name: 'Board',
    components: {
        Square,
    },
    props: {
        currentBoard: Array
    },
    methods: {
        onSquareClick(x) {
            this.$emit("clickedSquare", x)
            console('clicked', x)
        }
    }
}
</script>

<style>
    .row::after {
        clear: both;
        content: "";
        display: table;
    }

</style>