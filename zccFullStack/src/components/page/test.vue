<template>
    <div>
        <el-dialog
            title=""
            :visible.sync="popData_list.isShow"
            width="80%" :show-close="false" class="ui-dialog"
           >
        <el-table
            ref="singleTable"
            :data="popData_list.tableData"
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column label="" width="65">
                <template slot-scope="scope">
                    <el-radio  :label="scope.row.id" v-model="templateRadio" >&nbsp</el-radio>
                </template>
            </el-table-column>
            <el-table-column :label="key" v-for ="(value,key) in popData_list.tableData[0]"  :key="key" >
                <template slot-scope="scope">
                    <span>{{scope.row[key]}}</span>
                </template>
            </el-table-column>

        </el-table>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        props: {
            popData_list: Object,
        },
        data() {
            return {
                templateRadio:"",

                currentRow: null
            }
        },
mounted(){
           console.log("llllll",this.popData_list)
},
        methods: {
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row);
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            }
        }
    }
</script>

