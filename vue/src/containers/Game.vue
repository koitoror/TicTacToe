<template>
  <div class="game">

      <!-- Board -->
      <Board @clickedSquare="handleClick" :currentBoard="currentBoard"/>

    <div class="game-info">
      
      <div>{{status}}</div>
      <div>{{currentBoard}}</div>

    </div>

  </div>

</template>

<script>

import Board from '@/components/Board.vue';

import {
  calculateWinner, currentMove, initialState, move,
} from '@/containers/helpers';

export default {
  name: 'Game',
  components: {
    Board
  },
  data() {
    return {
      state: initialState(),
    };
  },
  methods: {
    handleClick(id) {
      const newState = move(id, this.state) 
      if (newState) {
        this.state = newState
      }
    }
  },
  computed: {
    currentBoard() {
      return currentMove(this.state).squares;
    },

    status() { // Notera: computed methods accessas utan invokering "()", dvs bara "status" inte "status()"
      const winner = calculateWinner(this.currentBoard)
      if (winner) {
        return `Winner is ${winner}`
      }
      return `Next player: ${this.state.xIsNext ? 'X': 'O'}`; // eller "Winner is: X/O", eller överkurs: "It's a draw!"
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .game {
    display: flex;
    flex-direction: row;
  }

  .game-info {
    margin-left: 20px;
  }


</style>
