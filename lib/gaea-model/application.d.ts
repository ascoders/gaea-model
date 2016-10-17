declare namespace FitGaea {
    export class _ {

    }

    /**
     * 组件信息
     */
    export interface ComponentProps extends __React.HTMLProps<any> {
        /**
         * 唯一的 key,用来唯一标识这个组件,所有盖亚内部组件都以 gaea- 为前缀
         */
        gaeaUniqueKey: string
        /**
         * 组件的中文名
         */
        gaeaName: string
        /**
         * 组件图标,为 fontAwesome
         */
        gaeaIcon?: string

        gaeaEdit?: Array<ComponentPropsGaeaEdit>

        [x: string]: any
    }

    /**
     * 组件配置中数组配置
     */
    export interface ComponentPropsOptionsArray extends ComponentPropsGaeaEdit {
        key: string
    }

    /**
     * 组件配置中数组配置的值
     */
    export interface ComponentPropsOptionsArrayValue {
        /**
         * ComponentPropsOptionsArray 设置的 key
         */
        key: string
        /**
         * 用户填入的值
         */
        value: number|string
    }

    /**
     * 组件配置 选择器配置
     */
    export interface ComponentPropsOptionsSelector {
        key: string
        value: string
    }

    /**
     * number 配置项
     */
    export interface Number {
        // 为空时，是数字，否则会以字符串加后缀形式赋值
        key: string
        value: string
    }

    /**
     * 组件的值
     */
    export type ComponentPropsOptionValue = number|string|boolean|Array<ComponentPropsOptionsArrayValue>|any

    /**
     * 组件配置
     */
    export interface ComponentPropsGaeaEdit {
        /**
         * 对应字段名
         */
        field: string
        /**
         * 选项名称
         */
        label: string
        /**
         * 编辑器类型
         */
        editor: string
        /**
         * 是否可被编辑
         */
        editable: boolean
        /**
         * 当 editor 为 array 时的数组配置
         * 数组中的 key,和填入的值,会作为 Array<key:value> 填入到 value 中
         */
        array?: Array<ComponentPropsOptionsArrayValue>
        /**
         * 当 editor 为 selector 时的数组配置
         */
        selector?: Array<ComponentPropsOptionsSelector>
        /**
         * 值类型, 默认为字符串
         */
            type?: string
        /**
         * 为空时的值，默认为 null
         */
        emptyValue?: any
        /**
         * 控制 number 单位
         */
            number?: {
            units: Array<Number>
            currentUnit: string
            max?: number
            min?: number
            step?: number
            speed?: number
            inputRange?: Array<number>
            outputRange?: Array<number>
            slider?: boolean
        }
        /**
         * 枚举实例
         */
        instance?: Array<{
            [key: string]: ComponentPropsOptionValue
        }>
    }

    /**
     * 组合信息
     */
    export interface ComboComponentInfo extends ViewportComponentFullInfo {
        // 组合名
        name: string
    }

    /**
     * 获取发布列表的返回值
     */
    export interface GetPublishListResult {
        // 版本
        version: string
        // 描述
        description: string
    }

    /**
     * 版本信息
     */
    export interface VersionInfo {
        content: string
    }
}