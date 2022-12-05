/**
 * 功能描述：将平铺数据结构转换为树状结构
  * */

interface DataType {
  districtId: number; // 本节点id
  pid: number; // 父节点id
  key: string;
  children: any[]
}

interface Tree {
  districtId: number; // 本节点id
  city: string;
  children: Tree[];
}




// 树状数据,保存树状数据
const treeList: any[] = []
const map: Record<number, DataType> = {}; // id索引，通过id可以快速找到该节点

export const arrToTree = (list: DataType[]) => {
  list.forEach(item => {
    if (!item.children) { // 补上children
      item.children = []
    }
    map[item.districtId] = item
  })
  list.forEach(item => {
    // 对于每个元素来说,先找他的上级,能找到,有上级,如果有,即将此数据方法上级的chidren中
    // 如果找不到,则没有上级,为单独存在的,即添加到treeList
    const parent = map[item.pid]
    // 如果存在则表示item不是最顶层的数据,代表其有上级
    if (parent) { // 如果有上级
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(item) // 将其添加到上级的children中
    } else {
      // 如果不存在 则是顶层数据
      treeList.push(item) // 没有上级的话添加到treeList中
    }
  })
  // 将判断后的树状数组返回出去
  return treeList
}