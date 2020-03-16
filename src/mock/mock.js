import Mock from '@mpxjs/mock'
import mock from 'mockjs'
import config from '../utils/config'
const { userLogin, getDayUrl, getMonthUrl, reportListUrl, mistakeListUrl, notCheckReportUrl,
  checkReportUrl, sendReportUrl } = config.api
const Random = mock.Random
Mock([
  {
    url: userLogin,
    rule: {
      'user': /[a-z]{6,20}/,
      'token': /\d{40}/
    }
  },
  {
    url: getDayUrl,
    rule: {
      'count|0-20': 15,
      'list|0-20': [
        {
          'classCourseName|1': ['一对一语文数学化学', '一对二数学', '一对多英语化学', '一对三语文数学化学物理', '一对一生物数学化学', '一对二生物数学语文', '一对四地理生物数学语文'],
          'timeFrom': Random.datetime('yyyy-MM-dd HH:mm'),
          'timeTo': Random.datetime('yyyy-MM-dd HH:mm'),
          'classroomStatus|1': [0, 1, 2, 3],
          'subschoolName|1': ['东风西校区', '天河体育西校区', '鹭江校区', '大学城校区', '小北花圈校区', '中大校区', '北京路校区', '三元里校区'],
          'classroomName|1': ['403课室', '509课室', '201课室', '203课室', '301课室', '303课室']
        }
      ]
    }
  },
  {
    url: getMonthUrl,
    rule: {
      'count|0-20': 15,
      'list|0-20': [
        {
          'classCourseName|1': ['一对一语文数学化学', '一对二数学', '一对多英语化学', '一对三语文数学化学物理', '一对一生物数学化学', '一对二生物数学语文', '一对四地理生物数学语文'],
          'timeFrom': Random.datetime('yyyy-MM-dd HH:mm'),
          'timeTo': Random.datetime('yyyy-MM-dd HH:mm'),
          'classroomStatus|1': [0, 1, 2, 3],
          'subschoolName|1': ['东风西校区', '天河体育西校区', '鹭江校区', '大学城校区', '小北花圈校区', '中大校区', '北京路校区', '三元里校区'],
          'classroomName|1': ['403课室', '509课室', '201课室', '203课室', '301课室', '303课室']
        }
      ]
    }
  },
  {
    url: reportListUrl,
    rule: {
      'count|0-20': 15,
      'list|0-8': [
        {
          'id': /[a-z\d-]{40}/,
          'classCourseName|1': ['一对一一年级语文英语', '一对三初一初二初三语文化学英语数学语文地理', '一对二一年级二年级三年级数学', '一对五初二化学英语数学语文地理物理全理科综合', '一对多四年级英语', '一对四高中地理化学'],
          'studentName|1': [
            '张三', '陈建波', '何志华', '胡志明', '谢婷', '刘东升', '陈六', '刘晓华', '李四'
          ],
          'lessonTime|1': ['2019-01-02 14:30', '2018-12-05 10:00', '2018-11-28 09:45', '2019-01-04 13:00', '2018-04-02 14:30'],
          'submitDate|1': ['2019-01-02 14:30', '2018-12-05 10:00', '2018-11-28 09:45', '2019-01-04 13:00', '2018-04-02 14:30'],
          'score|1': [1, 2, 3, 4, 5],
          'evaluation|1': ['成绩进步很好，请继续努力', '课堂上能专心听讲，准确完成老师的提问', '课后能完成课后作业，遇到问题能及时请教老师'],
          'hasCheck|1': [true, false]
        }
      ]
    }
  },
  {
    url: mistakeListUrl,
    rule: {
      'count|0-20': 15,
      'list|0-20': [
        {
          'id': /[a-z\d-]{40}/,
          'content|1': [
            'I couldn’t do anything but stand and stare. Then a man approached me and asked ______ I wanted myngings back.',
            'He was greeted by the city mouse cheerfully. The country mouse was surprised ______ big the house was.',
            'The rabbit dug a tunnel right to ______ the dog had been lying all the time.',
            'However, there are fears ______ Chinglish could be killed off because some people are worried that Chinglish may embarrass foreign visitors.',
            'The rabbit dug a tunnel right to ______ the dog had been lying all the time.'
          ],
          'analysis|1': [
            '由从句前的及物动词imagine可以得知后面是个宾语从句，再根据从句be like缺宾语的特征判断，这里应该填一个连接代词what，表示“像什么样子。',
            '考查宾语从句，作ask的宾语，从句中不缺成分，一个男人靠近我问我是否想要回我的东西。从句中缺少“是否”的词。',
            '由从句前的was surprised可以得知后面是个宾语从句，然后根据从句的句意，可以判断这里应该用连接副词how去修饰形容词big，表示“多么的大.',
            '兔子挖了隧道直接通到了那只狗一直躺着的地方。是作to的宾语，where在句中作状语。',
            '考查同位语从句，被修饰的词是fear，恐惧，是因为担心中式英语可能会让外国游客很尴尬而被扼杀的恐惧，因为从句中句子成分完整，所以用that.'
          ],
          'answer|1': ['what', 'that', 'if', 'how', 'where']
        }
      ]
    }
  },
  {
    url: notCheckReportUrl,
    rule: {
      'id': /[a-z\d-]{40}/,
      'studentName|1': ['张三', '陈建波', '何志华', '胡志明', '谢婷', '刘东升', '陈六', '刘晓华', '李四'],
      'topicDocName|1': ['张三', '导学案任务发放与审核PPT.pptx', '导学案任务发放与审核PPT.pptx', '旅游与交通（谓语的时态语态及虚拟综合）'],
      'topCourseName|1': ['英语'],
      'gradeName|1': ['高一'],
      'lessonStartDate|1': ['2019-01-02 14:30', '2018-12-05 10:00', '2018-11-28 09:45', '2019-01-04 13:00', '2018-04-02 14:30'],
      'lessonEndDate|1': ['2019-01-02 14:30', '2018-12-05 10:00', '2018-11-28 09:45', '2019-01-04 13:00', '2018-04-02 14:30'],
      'lastHomeworkSubjectLogDTOs|1-10': [{
        'id': /[a-z\d-]{40}/,
        'moduleName|1': ['课首小测', '导学一 知识点讲解1 我爱展示1', '导学一 知识点讲解1 例题1'],
        'content|1': [
          'I couldn’t do anything but stand and stare. Then a man approached me and asked ______ I wanted myngings back.',
          'He was greeted by the city mouse cheerfully. The country mouse was surprised ______ big the house was.',
          'The rabbit dug a tunnel right to ______ the dog had been lying all the time.',
          'However, there are fears ______ Chinglish could be killed off because some people are worried that Chinglish may embarrass foreign visitors.',
          'The rabbit dug a tunnel right to ______ the dog had been lying all the time.'
        ],
        'analysis|1': [
          '由从句前的及物动词imagine可以得知后面是个宾语从句，再根据从句be like缺宾语的特征判断，这里应该填一个连接代词what，表示“像什么样子。',
          '考查宾语从句，作ask的宾语，从句中不缺成分，一个男人靠近我问我是否想要回我的东西。从句中缺少“是否”的词。',
          '由从句前的was surprised可以得知后面是个宾语从句，然后根据从句的句意，可以判断这里应该用连接副词how去修饰形容词big，表示“多么的大.',
          '兔子挖了隧道直接通到了那只狗一直躺着的地方。是作to的宾语，where在句中作状语。',
          '考查同位语从句，被修饰的词是fear，恐惧，是因为担心中式英语可能会让外国游客很尴尬而被扼杀的恐惧，因为从句中句子成分完整，所以用that.'
        ],
        'answer|1': ['what', 'that', 'if', 'how', 'where'],
        'type': 0
      }],
      'knowledgeDTOs|1-6': [{
        'id': /[a-z\d-]{40}/,
        'knowledgeName|1': ['过去将来时', '过去将来进行时', '过去将来完成时', '过去进行时', '虚拟语气', '一般现在时'],
        'subjectRightNum': 0
      }],
      'activeFocus': 0,
      'thinkAsk': 0,
      'goodHabits': 0,
      'teacherComment': ''
    }
  },
  {
    url: sendReportUrl,
    rule: {
      'msg': '成功发送'
    }
  },
  {
    url: checkReportUrl,
    rule: {
      'id': /[a-z\d-]{40}/,
      'studentName|1': ['张三', '陈建波', '何志华', '胡志明', '谢婷', '刘东升', '陈六', '刘晓华', '李四'],
      'topicDocName|1': ['张三', '导学案任务发放与审核PPT.pptx', '导学案任务发放与审核PPT.pptx', '旅游与交通（谓语的时态语态及虚拟综合）'],
      'topCourseName|1': ['英语'],
      'gradeName|1': ['高一'],
      'lessonStartDate|1': ['2019-01-02 14:30', '2018-12-05 10:00', '2018-11-28 09:45', '2019-01-04 13:00', '2018-04-02 14:30'],
      'lessonEndDate|1': ['2019-01-02 14:30', '2018-12-05 10:00', '2018-11-28 09:45', '2019-01-04 13:00', '2018-04-02 14:30'],
      'lastHomeworkSubjectLogDTOs|1-10': [{
        'id': /[a-z\d-]{40}/,
        'moduleName|1': ['课首小测', '导学一 知识点讲解1 我爱展示1', '导学一 知识点讲解1 例题1'],
        'content|1': [
          'I couldn’t do anything but stand and stare. Then a man approached me and asked ______ I wanted myngings back.',
          'He was greeted by the city mouse cheerfully. The country mouse was surprised ______ big the house was.',
          'The rabbit dug a tunnel right to ______ the dog had been lying all the time.',
          'However, there are fears ______ Chinglish could be killed off because some people are worried that Chinglish may embarrass foreign visitors.',
          'The rabbit dug a tunnel right to ______ the dog had been lying all the time.'
        ],
        'analysis|1': [
          '由从句前的及物动词imagine可以得知后面是个宾语从句，再根据从句be like缺宾语的特征判断，这里应该填一个连接代词what，表示“像什么样子。',
          '考查宾语从句，作ask的宾语，从句中不缺成分，一个男人靠近我问我是否想要回我的东西。从句中缺少“是否”的词。',
          '由从句前的was surprised可以得知后面是个宾语从句，然后根据从句的句意，可以判断这里应该用连接副词how去修饰形容词big，表示“多么的大.',
          '兔子挖了隧道直接通到了那只狗一直躺着的地方。是作to的宾语，where在句中作状语。',
          '考查同位语从句，被修饰的词是fear，恐惧，是因为担心中式英语可能会让外国游客很尴尬而被扼杀的恐惧，因为从句中句子成分完整，所以用that.'
        ],
        'answer|1': ['what', 'that', 'if', 'how', 'where'],
        'type': 0
      }],
      'knowledgeDTOs|1-6': [{
        'id': /[a-z\d-]{40}/,
        'knowledgeName|1': ['过去将来时', '过去将来进行时', '过去将来完成时', '过去进行时', '虚拟语气', '一般现在时'],
        'subjectRightNum|1': [10, 23, 30, 40, 54, 60, 80]
      }],
      'activeFocus|1': [1, 2, 3, 4, 5],
      'thinkAsk|1': [1, 2, 3, 4, 5],
      'goodHabits|1': [1, 2, 3, 4, 5],
      'teacherComment|1': ['成绩进步很好', '请继续努力', '课堂上能专心听讲', '准确完成老师的提问', '课后能完成课后作业', '遇到问题能及时请教老师'],
      'lastWorkSubjectNum|1': [10, 23, 30, 40, 54, 60, 80, 90],
      'lastWorkSubjectFinishNum|1': [10, 23, 30, 40, 54, 60, 80, 90],
      'lastWorkSubjectRightNum|1': [10, 23, 30, 40, 54, 60, 80, 90],
      'imageUrls|1-3': [
        {
          'url|1': [
            'https://tse3.mm.bing.net/th?id=OIP.uvkNIBKgSvLESPp4PJdksAHaKq&pid=Api',
            'http://feizhuliu.vipyl.com/attached/image/20130205/20130205154744934493.jpg',
            'https://tse3.mm.bing.net/th?id=OIP.n9KcEZGFP2FoSrn2RN2-9wHaGN&pid=Api&w=487&h=408&rs=1&p=0',
            'https://tse4.mm.bing.net/th?id=OIP.t_1_FkBJOtE1EgrWIsoyDwHaFs&pid=Api&w=450&h=346&rs=1&p=0',
            'https://tse3.mm.bing.net/th?id=OIP.BKubONpxbM7h_35j1qCr7gHaF8&pid=Api'
          ]
        }
      ]
    }
  }
])
