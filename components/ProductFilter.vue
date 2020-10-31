<template>
  <div>
      <select name="filetr" id="filter">
          <option v-for="filter in filters" :key="filter.id" value="filter.id">{{ filter.name }}</option>
      </select>
  </div>
</template>

<script>
export default {

    data: () => {
        return {
            filters: [
                {name: "high name", id: "23"},
                {name: "high price", id: "11"},
                {name: "lower price", id: "43"},
                {name: "lower name", id: "123"},
            ]
        }
    }

}
</script>

<style>

</style>