import { Component, OnInit } from '@angular/core';
import { AgoraEduSDK } from 'agora-classroom-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    AgoraEduSDK.config({
      // 此处替换成你的 App ID
      appId: '1bf8ee8c7f4b4c21be79809a26039a9c',
    });
    // API文档：https://docs.agora.io/cn/agora-class/agora_class_api_ref_web?platform=Web#launchoption
    AgoraEduSDK.launch(
      document.querySelector('#root') as any, {
      // 此处替换成你的 RTM Token
      rtmToken: '0061bf8ee8c7f4b4c21be79809a26039a9cIADb/wx3W9TQ7wc+lFp7mKxnXIopR+tX0DGn2bj22n3HZ8KcwQsAAAAAEABDwDbNwzd4YQEA6APDN3hh',
      // 请确保此次的用户 ID 和你在生成临时 RTM Token 时使用的用户 ID 保持一致, 长度在 64 字节以内
      userUuid: 'e40ecdbc66574835beb09eec37df92c2',
      // 用户名，用于课堂内显示，长度在 64 字节以内
      userName: 'teacher',
      // 课堂 ID。这是课堂的全局唯一标识。长度在 64 字节以内
      roomUuid: 'blingabc',
      // 课堂名，用于课堂内显示，长度在 64 字节以内
      roomName: 'viplearn-teacher',
      // 用户在课堂中的角色，【0】: 观众，用于页面录制 【1】: 老师 【2】: 学生 【3】: 助教
      roleType: 1,
      // 课堂类型
      // 【0】: 1 对 1 互动教学。1 位老师对 1 名学生进行专属在线辅导教学
      // 【2】: 互动直播大班课。1 位老师进行在线教学，多名学生实时观看和收听。学生人数无上限。上课过程中，学生可“举手”请求发言，与老师进行实时音视频互动
      // 【4】: 在线互动小班课。1 位老师进行在线教学，多名学生实时观看和收听。课堂人数上限为 500。上课过程中，老师可点名学生“上台”发言，与老师进行实时音视频互动
      roomType: 0,
      // 是否开启课前设备检测：
      // true: 开启课前设备检测。开启后，在加入课堂前会弹出设备检测页面，测试终端用户的摄像头、麦克风和扬声器是否能正常工作
      // false: 不开启课前设备检测。
      pretest: true,
      // 课堂界面的语言，【"en"】英文，【"zh"】中文
      language: 'en',
      // 课堂开始时间，单位为毫秒，以第一个进入课堂的用户传入的参数为准
      startTime: new Date().getTime(),
      // 课堂持续时间，单位为秒，以第一个进入课堂的用户传入的参数为准
      duration: 60 * 30,
      // 教育机构指派的课件配置，客户端无法编辑。详见 CourseWareList。配置后，SDK 会在启动课堂时将相应的课件从 Agora 云盘组件中下载至本地（课件预加载配置）
      courseWareList: [],
      // 老师端自行上传的课件配置，详见 CourseWareList。配置后，SDK 会在启动课堂时将相应的课件从 Agora 云盘组件中下载至本地
      personalCourseWareList: [],
      // 课堂所在区域。所有客户端必须设置相同的区域，否则无法互通。灵动课堂支持以下区域：【CN】: （默认）中国大陆 【AP】: 亚太地区 【EU】: 欧洲 【NA】: 北美
      region: 'CN',
      // 课堂启动状态：ready: 课堂准备完毕 destroyed: 课堂已销毁
      listener: (evt: any) => {
        console.log('evt', evt);
      }
    });

    // 第三方云存储账号
    // 互动白板功能需要第三方云存储用于储存课堂文件。当前仅支持阿里云 OSS。
    // 录制功能需要第三方云存储录制文件。当前支持阿里云 OSS、七牛云、Amazon S3、腾讯云、金山云以及 Microsoft Azure。

    // 配置 aPaaS 服务 API文档：https://docs.agora.io/cn/agora-class/agora_class_prep
    // 白板、录制、环信IM
  }

}

// 白板参数

// app: WyerYDWyEeyLu6WNgalePg/BTSz5JTXfXG4PA
// ak: YmrhciwzES0ECErm
// sk: zTjuWJU41qYwZmOHNFFoBfasnmdmaPWQ

// tslint:disable-next-line:max-line-length
// NETLESSSDK_YWs9WW1yaGNpd3pFUzBFQ0VybSZub25jZT1iYzBiOTgxMC0zNWIyLTExZWMtOGJiYi1hNThkODFhOTVlM2Umcm9sZT0wJnNpZz1kYjA2NGY5NGJhYTZjMDYwZDgxNjQwNTBjYzkxZDI5Yzk4NzU5MWQzMmEzNDQzMDNhOWE0MzVkNzExN2ZlNmNh
