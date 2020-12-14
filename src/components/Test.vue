<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 192px;
    height: 58px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 3px;
    left: 20px;
}
.layout-nav{
    width: 420px;

    margin-right: 20px;
    float: right;
}
</style>
<template>
    <div class="layout">
        <Layout>
          <template id="header">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"><!-- <img src="@/assets/mylogo.png"> --></div>
                    <div class="layout-nav">

                        <MenuItem name="1" style="float: right;">
                            <Avatar style="background-color: #87d068" icon="ios-person" size="large" />
                            {{name}}
                           <!-- <p style="margin-left: 4px;" v-html="name"> 12313</p> -->
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
          </template>
            <Layout>
              <template id="lefttitle">
                  <Sider hide-trigger :style="{background: '#fff'}">
                      <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                          <Submenu name="1">
                              <template slot="title">
                                  <Icon type="ios-navigate"></Icon>
                                  Item 1
                              </template>
                              <MenuItem name="1-1">Option 1</MenuItem>
                              <MenuItem name="1-2">Option 2</MenuItem>
                              <MenuItem name="1-3">Option 3</MenuItem>
                          </Submenu>
                          <Submenu name="2">
                              <template slot="title">
                                  <Icon type="ios-keypad"></Icon>
                                  Item 2
                              </template>
                              <MenuItem name="2-1">Option 1</MenuItem>
                              <MenuItem name="2-2">Option 2</MenuItem>
                          </Submenu>
                          <Submenu name="3">
                              <template slot="title">
                                  <Icon type="ios-analytics"></Icon>
                                  Item 3
                              </template>
                              <MenuItem name="3-1">Option 1</MenuItem>
                              <MenuItem name="3-2">Option 2</MenuItem>
                          </Submenu>
                      </Menu>
                  </Sider>
              </template>

                <Layout :style="{padding: '0 24px 24px'}">

                <template id="content">

                    <Breadcrumb :style="{margin: '10px 0'}">
                      <!--  <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem> -->
                        <h2>广告数据列表</h2>
                    </Breadcrumb>
                  <Row style="height: 6px ;"> </Row>
                    <Content :style="{padding: '24px', minHeight: '680px', background: '#fff'}">


                      <Row  >
                        <Button type="primary">新增</Button>
                        <Input v-model="value" placeholder="请输入广告名称..." style="width: 200px ; margin-left: 10px;"/>
                        <Button type="primary" style="  margin-left: 10px;">搜索</Button>
                      </Row>
                       <Row style="height: 26px ;"> </Row>

                       <Table :columns="columns1" :data="data1">
                         <template slot-scope="{ row, index }" slot="action">
                             <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">修改</Button>
                             <Button type="error" size="small" @click="remove(index)">删除</Button>
                         </template>
                       </Table>
                          <Row style="height: 20px ;"> </Row>


                      <Page :total="data1.length" show-elevator  />
                      <Spin fix v-show="isSpinShow">
                          <Icon type="load-c" size="30" class="demo-spin-icon-load"></Icon>
                          <div>Loading...</div>
                      </Spin>
                    </Content>
                </template>
                <template id="footer">
                    <Footer style="">Footer</Footer>
                 </template>

                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
      data () {
            return {
                name: "zhong",
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                     {
                        title: 'Action',
                        slot: 'action',
                        //width: 150,
                        align: 'center'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>
