// interface User {
//     id: string;
//     username: string;
//     password: string;
//     role: "teacher" | "student";
// }


// interface Session {
    // id: string;
    // session_id: string;
    // teacher_id: string;
    // start_time: Date;
    // end_time: Date;
// }

// interface SessionAudio {
    // id: string;
    // session_id: string; // session(id);
    // user_id: string;
    // audio_file_path: string;
    // offset_ms: string;
// }


const teacher = {
    id: "1212",
    username: "teacher",
    password: "teacher",
    role: "teacher"
}

const student = {
    id: "121201",
    username: "student",
    password: "student",
    role: "student"
};

const db = {
    users: [
        teacher,
        student
    ],
    sessions: [

    ],
    session_audios: [

    ]
}

export default db;