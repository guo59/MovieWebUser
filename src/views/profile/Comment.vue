<template>
  <div>
    <el-table
      :data="comments"
      style="width: 100%;"
      height="500"
      border>
      <el-table-column
        prop="name"
        label="电影名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="content"
        label="评论内容">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button type="text"
                    size="small"
                    @click.native.prevent="deleteRow(scope.$index, movies)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getUserComment} from '../../network/user'

export default {
  components: {},
  data () {
    return {
      comments: []
    }
  },
  created() {
    getUserComment(this.$route.params.userId).then(res => {
      console.log(res);
      this.comments = res.data
    })
  },
  methods: {}
}
</script>

<style type="text/css" scoped>
</style>
