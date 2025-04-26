import { ClassDetails } from "../types"

export const user = {
    username: "admin",
    password: "admin",
    role: "teacher"
}

export const navBarLinks = [
    {
        name: "المواد",
        to: "/dashboard/classes"
    },
    {
        name: "الشعب",
        to: "/dashboard"
    },
    {
        name: "المحاضرات",
        to: "/dashboard"
    },
    {
        name: "التواصل",
        to: "/dashboard"
    }
]

export const classes = [
    {
        "id": "1",
        "name": "ريض 101",
        "description": "يتناول هذا المقرر المفاهيم الأساسية في التفاضل مثل النهايات، الاشتقاق، وتطبيقاته على الدوال."
    },
    {
        "id": "2",
        "name": "ريض 202",
        "description": "يركز هذا المقرر على الزمر والحلقات والمجالات وبعض البنى الجبرية الأخرى."
    },
    {
        "id": "3",
        "name": "تحل 210",
        "description": "يعالج هذا المقرر الأساليب العددية لحل المعادلات الرياضية، مع التركيز على الحلول التقريبية والخوارزميات."
    },
    // {
    //     "name": "إحص 205",
    //     "description": "يغطي هذا المقرر المفاهيم الأساسية في الإحصاء الوصفي، نظرية الاحتمالات، والتوزيعات الاحتمالية."
    // },
    // {
    //     "name": "معاد 301",
    //     "description": "يتناول هذا المقرر حل المعادلات التفاضلية من الرتبة الأولى والثانية وتطبيقاتها في العلوم والهندسة."
    // },
    // {
    //     "name": "ريث 330",
    //     "description": "يركز المقرر على استخدام الرياضيات في حل المشكلات العملية في الفيزياء والهندسة والاقتصاد."
    // }
]


export const classesDetails: ClassDetails[] = [
    {
      class_id: "1",
      group_id: "1029345",
      sessions_level: 67,
      responsiveness_level: 72,
      quiz_work: 33,
    },
    {
      class_id: "1",
      group_id: "8954310",
      sessions_level: 32,
      responsiveness_level: 22,
      quiz_work: 37,
    },
    {
      class_id: "1",
      group_id: "6784091",
      sessions_level: 87,
      responsiveness_level: 90,
      quiz_work: 80,
    },
    {
      class_id: "1",
      group_id: "1029343",
      sessions_level: 40,
      responsiveness_level: 74,
      quiz_work: 63,
    },
    {
      class_id: "2",
      group_id: "2039485",
      sessions_level: 45,
      responsiveness_level: 60,
      quiz_work: 50,
    },
    {
      class_id: "2",
      group_id: "3094856",
      sessions_level: 70,
      responsiveness_level: 55,
      quiz_work: 65,
    },
    {
      class_id: "2",
      group_id: "4095867",
      sessions_level: 80,
      responsiveness_level: 75,
      quiz_work: 85,
    },
    {
      class_id: "3",
      group_id: "5096878",
      sessions_level: 60,
      responsiveness_level: 65,
      quiz_work: 70,
    },
    {
      class_id: "3",
      group_id: "6097889",
      sessions_level: 50,
      responsiveness_level: 45,
      quiz_work: 55,
    },
    {
      class_id: "3",
      group_id: "7098890",
      sessions_level: 90,
      responsiveness_level: 85,
      quiz_work: 95,
    },
  ];
  