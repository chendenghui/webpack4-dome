// 图标组件，用法与ant一致，提供内部icon
//viewBox指Svg画布可视范围，width,height是图标的宽高，用这个可以实现对图片的局部显示和放大缩小

import React, { Component } from 'react';
import PropTypes from 'prop-types';

//svg图形列表
const itemList = [
  {
    name: 'servicesDocIcon',
    text: '服务文档',
    element:(
        <g id="Page-2-Copy-6"  strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="home-1440x900-copy-5" transform="translate(-161.000000, -281.000000)">
                <g id="Group-13" transform="translate(161.000000, 281.000000)">
                    <rect id="Rectangle-43" fill="#5DACF8" x="0" y="1" width="2" height="14"></rect>
                    <rect id="Rectangle-43-Copy" fill="#5DACF8" x="0" y="0" width="12" height="2"></rect>
                    <circle id="Oval-4" fill="#5DACF8" cx="5.5" cy="5.5" r="1.5"></circle>
                    <rect id="Rectangle-11" fill="#FF5000" x="4" y="9" width="8" height="2"></rect>
                    <rect id="Rectangle-11-Copy" fill="#FF5000" x="4" y="13" width="8" height="2"></rect>
                </g>
            </g>
        </g>
    )
  },
  {
    name: 'commonServicesIcon',
    text: '常用服务',
    element:(
      <g id="" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="home-1440x900-copy-5" transform="translate(-160.000000, -95.000000)">
                    <g id="Group-7" transform="translate(160.000000, 94.000000)">
                        <path d="M9.39479366,12.4984741 L0.918836806,12.4984741 L0.918836806,11.496626 L0.918836806,10.4573946 L17.3733195,0.957394627 L18.3733195,2.68944543 L4.84768503,10.4984741 L10.9188368,10.4984741 L10.9188368,10.5013173 L10.9294476,10.4984741 L13,18.2258807 L11.0681483,18.7435188 L9.39479366,12.4984741 Z" id="Combined-Shape" fill="#5DACF8"></path>
                        <polygon id="Rectangle-42-Copy-3" fill="#FF5000" transform="translate(16.765731, 6.022928) rotate(18.000000) translate(-16.765731, -6.022928) " points="15.7617387 1.02292778 17.7697226 1.96521067 17.7617387 11.0229278 15.7617387 11.0229278"></polygon>
                    </g>
                </g>
            </g>
    )
  },
  {
    name: 'newsIcon',
    text: '新闻',
    element:(
      <g id="" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="home-1440x900-copy-5" transform="translate(-962.000000, -281.000000)">
              <g id="Group-16" transform="translate(962.000000, 281.000000)">
                  <path d="M14,13.9949018 L16,15 L16,0 L0,0 L0,11.7857143 L9.60403646,11.7857143 L12,12.9898036 L12,10.9532772 L10.1558399,9.98811494 L2,9.98811494 L2,2 L14,2 L14,10.5 L14,13.9949018 Z" id="Combined-Shape" fill="#5DACF8" fillRule="nonzero"></path>
                  <rect id="Rectangle-41" fill="#FF5000" x="4" y="4" width="4" height="2"></rect>
              </g>
          </g>
      </g>
    )
  },
  {
    name: 'commonAppIcon',
    text: '常用App',
    element:(
      <g id="" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="home-1440x900-copy-5" transform="translate(-961.000000, -94.000000)" fillRule="nonzero">
              <g id="Group-8" transform="translate(961.000000, 94.000000)">
                  <path d="M0,7 L0,6 C0,2.6862915 2.6862915,0 6,0 L7,0 L7,2 L6,2 C3.790861,2 2,3.790861 2,6 L2,7 L-3.33066907e-16,7 Z M0,9 L0,10 C0,13.3137085 2.6862915,16 6,16 L7,16 L7,14 L6,14 C3.790861,14 2,12.209139 2,10 L2,9 L2.22044605e-16,9 Z M16,7 L16,6 C16,2.6862915 13.3137085,0 10,0 L9,0 L9,2 L10,2 C12.209139,2 14,3.790861 14,6 L14,7 L16,7 Z M16,9 L16,10 C16,13.3137085 13.3137085,16 10,16 L9,16 L9,14 L10,14 C12.209139,14 14,12.209139 14,10 L14,9 L16,9 Z" id="Combined-Shape" fill="#5DACF8"></path>
                  <path d="M16,9 L16,10 C16,13.3137085 13.3137085,16 10,16 L9,16 L9,14 L10,14 C12.209139,14 14,12.209139 14,10 L14,9 L16,9 Z" id="Combined-Shape-Copy-2" fill="#FF5000"></path>
              </g>
          </g>
      </g>
    )
  },
  {
    name: 'devIcon',
    text: '研发内部系统',
    element:(
      <g id="" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="home-1440x900-copy-5" transform="translate(-960.000000, -525.000000)">
            <g id="Group-14" transform="translate(960.000000, 525.000000)">
                <rect id="Rectangle-13" stroke="#5DACF8" strokeWidth="2" x="1" y="1" width="14" height="9"></rect>
                <rect id="Rectangle-14" fill="#FF5000" x="4" y="13" width="8" height="2"></rect>
            </g>
        </g>
      </g>
    )
  },
  {
    name: 'printerIcon',
    text: '打印机',
    element:(

    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="1440x900-copy-3" transform="translate(-639.000000, -161.000000)">
            <g id="Group-6" transform="translate(135.000000, 88.000000)">
                <g id="Group-20-Copy-2" transform="translate(501.000000, 73.000000)">
                    <g id="Group-14" transform="translate(3.000000, 0.000000)">
                        <rect id="Rectangle-9" fill="#CBA0F7" x="0" y="0" width="48" height="48" rx="7.77777778"></rect>
                        <path d="M28.2735065,18 L33.283557,12.9899495 C33.830291,12.4432155 34.716722,12.4432155 35.263456,12.9899495 L40.9203102,18.6468037 C41.4670442,19.1935378 41.4670442,20.0799687 40.9203102,20.6267027 L27.6267027,33.9203102 C27.0799687,34.4670442 26.1935378,34.4670442 25.6468037,33.9203102 L20.6367532,28.9102597 L15.6267027,33.9203102 C15.0799687,34.4670442 14.1935378,34.4670442 13.6468037,33.9203102 L7.98994949,28.263456 C7.44321549,27.716722 7.44321549,26.830291 7.98994949,26.283557 L21.283557,12.9899495 C21.830291,12.4432155 22.716722,12.4432155 23.263456,12.9899495 L28.2735065,18 Z M28.2735065,18 L19.9899495,26.283557 C19.4432155,26.830291 19.4432155,27.716722 19.9899495,28.263456 L20.6367532,28.9102597 L28.9203102,20.6267027 C29.4670442,20.0799687 29.4670442,19.1935378 28.9203102,18.6468037 L28.2735065,18 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                        <path d="M28.2735065,18 L33.283557,12.9899495 C33.830291,12.4432155 34.716722,12.4432155 35.263456,12.9899495 L40.9203102,18.6468037 C41.4670442,19.1935378 41.4670442,20.0799687 40.9203102,20.6267027 L27.6267027,33.9203102 C27.0799687,34.4670442 26.1935378,34.4670442 25.6468037,33.9203102 L20.6367532,28.9102597 L28.9203102,20.6267027 C29.4670442,20.0799687 29.4670442,19.1935378 28.9203102,18.6468037 L28.2735065,18 Z" id="Combined-Shape" fill="#F0E2FF"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
    )
  },
  {
    name: 'printerIconS',
    text: '打印机弹框图标',
    element:(

    <g id="Page-2-Copy-6" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="打印机设置" transform="translate(-46.000000, -576.000000)">
            <g id="Group" transform="translate(27.000000, 564.000000)">
                <g id="Page-1" transform="translate(19.000000, 12.000000)">
                    <path d="M4,12.5000953 C4,13.3284293 4.67153864,14 5.50002383,14 C6.32831837,14 7,13.3284293 7,12.5000953 C7,11.6715707 6.32831837,11 5.50002383,11 C4.67153864,11 4,11.6715707 4,12.5000953" id="Fill-6" fill="#50E3C2"></path>
                    <path d="M26.7692853,8 L2.23067926,8 C1.63916295,8 1.07164043,8.22568191 0.65332605,8.62757888 C0.235047106,9.0294418 0,9.57442839 0,10.1428036 L0,20.8571623 C0,21.4254354 0.235047106,21.9705242 0.65332605,22.3724211 C1.07164043,22.7741819 1.63916295,23 2.23067926,23 L6.69232132,23 L6.69232132,18.7142225 L22.3076787,18.7142225 L22.3076787,23 L26.7692853,23 C27.3609788,23 27.9283241,22.7741819 28.3467094,22.3724211 C28.7650947,21.9705242 29,21.4254354 29,20.8571623 L29,10.1428036 C29,8.9621696 28.0007308,8 26.7692853,8 M26.7692853,10.1428036 L26.7692853,20.8571623 L24.5385706,20.8571623 L24.5385706,18.7142225 C24.5385706,18.1459834 24.303488,17.6008606 23.8851028,17.1989637 C23.4667175,16.7972029 22.8994076,16.5714188 22.3076787,16.5714188 L6.69232132,16.5714188 C6.10076957,16.5714188 5.53328249,16.7972029 5.11486178,17.1989637 C4.6965474,17.6008606 4.46160662,18.1459834 4.46160662,18.7142225 L4.46160662,20.8571623 L2.23067926,20.8571623 L2.23067926,10.1428036 L26.7692853,10.1428036" id="Fill-1" fill="#50E3C2"></path>
                    <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-1"></use>
                    </mask>
                    <g id="Clip-4"></g>
                    <path d="M19,7 L16.9829846,7 L16.9829846,2.33327155 L11.0168872,2.33327155 L11.0168872,7 L9,7 L9,1.16672845 C9,0.857261635 9.10625821,0.560547165 9.29538245,0.34175546 C9.48441055,0.122926685 9.74101964,0 10.0083635,0 L17.9914763,0 C18.2589804,0 18.5154613,0.122926685 18.7045855,0.34175546 C18.8937418,0.560547165 19,0.857261635 19,1.16672845 L19,7 Z M17.9914763,29 L10.0083635,29 C9.74101964,29 9.48441055,28.8775766 9.29538245,28.6596439 C9.10625821,28.4418957 9,28.1462484 9,27.8381964 L9,20 L11.0168872,20 L11.0168872,26.676282 L16.9829846,26.676282 L16.9829846,20 L19,20 L19,27.8381964 C19,28.1462484 18.8937418,28.4418957 18.7045855,28.6596439 C18.5154613,28.8775766 18.2589804,29 17.9914763,29 L17.9914763,29 Z" id="Fill-3" fill="#50E3C2" mask="url(#mask-2)"></path>
                </g>
            </g>
        </g>
    </g>
    )
  },
  {
    name: 'iconNew',
    text: '新增项目标签',
    element:(
    <g id="Page-2-Copy-6" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="新增项目标签" transform="translate(-42.000000, -70.000000)">
            <g id="Group-6" transform="translate(42.980469, 70.945312)">
                <path d="M4,0 L20,0 L20,0 C22.209139,-4.05812251e-16 24,1.790861 24,4 L24,10 L24,10 C24,12.209139 22.209139,14 20,14 L0,14 L0,4 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 Z" id="Rectangle-37" fill="#A0D911"></path>
                <text id="New" fontFamily="PingFangSC-Medium, PingFang SC" fontSize="9" fontWeight="400" fill="#FFFFFF">
                    <tspan x="3" y="10">New</tspan>
                </text>
            </g>
        </g>
    </g>

    )
  },
  {
    name: 'iconHot',
    text: '热点项目标签',
    element:(

            <g id="Page-2-Copy-6" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="热点项目标签" transform="translate(-93.000000, -70.000000)">
                    <g id="Group-6-Copy" transform="translate(93.171875, 70.945312)">
                        <path d="M4,0 L20,0 L20,0 C22.209139,-4.05812251e-16 24,1.790861 24,4 L24,10 L24,10 C24,12.209139 22.209139,14 20,14 L0,14 L0,4 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 Z" id="Rectangle-37" fill="#F5222D"></path>
                        <text id="Hot" fontFamily="PingFangSC-Medium, PingFang SC" fontSize="9" fontWeight="400" fill="#FFFFFF">
                            <tspan x="4" y="10">Hot</tspan>
                        </text>
                    </g>
                </g>
            </g>


    )
  }
]
class Svg extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    const {children,height,width,IconName,viewBox} = this.props;
    return (
      <svg
        viewBox={viewBox}
        height={height}
        width={width}
        >
          {
            itemList.map((item,index)=> {
              return <symbol id={item.name} key={index}>{item.element}</symbol>
            })
          }
          <use xlinkHref={`#${IconName}`}
            // x="0" y="0" width="15" height="15"
          />
      </svg>
      )
  }
}

Svg.propTypes = {
  height:PropTypes.string,
  width:PropTypes.string,
  IconName:PropTypes.string,
  viewBox:PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
};

Svg.defaultProps = {
  height:'15',
  width:'15',
  IconName:'',
  viewBox:'0 0 15 15',
  children:[]
};

export default Svg;
