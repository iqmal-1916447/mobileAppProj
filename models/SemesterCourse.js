class SemesterCourse {
  constructor(
    id = null,
    code = null,
    sect = null,
    title = null,
    chr = null,
    day = null,
    time = null,
    venue = null,
    lecturer = null
  ) {
    this.id = id;
    this.code = code;
    this.sect = sect;
    this.title = title;
    this.chr = chr;
    this.day = day;
    this.time = time;
    this.venue = venue;
    this.lecturer = lecturer;
  }
}

export default SemesterCourse;
