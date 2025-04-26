import { ClassDetails } from "../types";

export const user = {
  username: "admin",
  password: "admin",
  role: "teacher",
};

export const navBarLinks = [
  {
    name: "المواد",
    to: "/classes",
  },
  {
    name: "الشعب",
    to: "/",
  },
  {
    name: "المحاضرات",
    to: "/",
  },
  {
    name: "التواصل",
    to: "/",
  },
];

export const classes = [
  {
    id: "1",
    name: "ريض 101",
    description:
      "يتناول هذا المقرر المفاهيم الأساسية في التفاضل مثل النهايات، الاشتقاق، وتطبيقاته على الدوال.",
  },
  {
    id: "2",
    name: "ريض 202",
    description:
      "يركز هذا المقرر على الزمر والحلقات والمجالات وبعض البنى الجبرية الأخرى.",
  },
  {
    id: "3",
    name: "تحل 210",
    description:
      "يعالج هذا المقرر الأساليب العددية لحل المعادلات الرياضية، مع التركيز على الحلول التقريبية والخوارزميات.",
  },
  {
    id: "4",
    name: "إحص 205",
    description:
      "يغطي هذا المقرر المفاهيم الأساسية في الإحصاء الوصفي، نظرية الاحتمالات، والتوزيعات الاحتمالية.",
  },
  {
    id: "5",
    name: "معاد 301",
    description:
      "يتناول هذا المقرر حل المعادلات التفاضلية من الرتبة الأولى والثانية وتطبيقاتها في العلوم والهندسة.",
  },
  {
    id: "6",
    name: "ريث 330",
    description:
      "يركز المقرر على استخدام الرياضيات في حل المشكلات العملية في الفيزياء والهندسة والاقتصاد.",
  },
];

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
  {
    class_id: "4",
    group_id: "8109901",
    sessions_level: 65,
    responsiveness_level: 70,
    quiz_work: 60,
  },
  {
    class_id: "4",
    group_id: "8110012",
    sessions_level: 75,
    responsiveness_level: 80,
    quiz_work: 78,
  },
  {
    class_id: "4",
    group_id: "8121123",
    sessions_level: 55,
    responsiveness_level: 60,
    quiz_work: 58,
  },
  {
    class_id: "5",
    group_id: "9132234",
    sessions_level: 85,
    responsiveness_level: 90,
    quiz_work: 88,
  },
  {
    class_id: "5",
    group_id: "9143345",
    sessions_level: 45,
    responsiveness_level: 50,
    quiz_work: 48,
  },
  {
    class_id: "5",
    group_id: "9154456",
    sessions_level: 65,
    responsiveness_level: 70,
    quiz_work: 68,
  },
  {
    class_id: "6",
    group_id: "1015567",
    sessions_level: 72,
    responsiveness_level: 77,
    quiz_work: 74,
  },
  {
    class_id: "6",
    group_id: "1026678",
    sessions_level: 52,
    responsiveness_level: 57,
    quiz_work: 54,
  },
  {
    class_id: "6",
    group_id: "1037789",
    sessions_level: 92,
    responsiveness_level: 97,
    quiz_work: 94,
  },
];
