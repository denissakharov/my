const { spawn } = require("child_process");

const childProcess = spawn("ffmpeg", [
  // Resize a Video to Multiple Resolutions
  "-i",
  "./in/Big_Buck_Bunny_1080_10s_1MB.mp4",
  "-filter_complex",
  "[0:v]split=3[v1][v2][v3];[v1]copy[v1out];[v2]scale=w=1280:h=720[v2out];[v3]scale=w=640:h=360[v3out]",
  // Transcode a Video to Multiple Bitrates for HLS Packaging
  "-map", // video map 1
  "[v1out]",
  "-c:v:0",
  "libx264",
  "-x264-params",
  "nal-hrd=cbr:force-cfr=1",
  "-b:v:0",
  "5M",
  "-minrate:v:0",
  "5M",
  "-bufsize:v:0",
  "10M",
  "-preset",
  "slow",
  "-g",
  "48",
  "-sc_threshold",
  "0",
  "-keyint_min",
  "48",
  "-map", // video map 2
  "[v2out]",
  "-c:v:1",
  "libx264",
  "-x264-params",
  "nal-hrd=cbr:force-cfr=1",
  "-b:v:1",
  "3M",
  "-minrate:v:1",
  "3M",
  "-bufsize:v:1",
  "3M",
  "-preset",
  "slow",
  "-g",
  "48",
  "-sc_threshold",
  "0",
  "-keyint_min",
  "48",
  "-map", // video map 3
  "[v3out]",
  "-c:v:2",
  "libx264",
  "-x264-params",
  "nal-hrd=cbr:force-cfr=1",
  "-b:v:2",
  "1M",
  "-minrate:v:2",
  "1M",
  "-bufsize:v:2",
  "1M",
  "-preset",
  "slow",
  "-g",
  "48",
  "-sc_threshold",
  "0",
  "-keyint_min",
  "48",
  // Creating HLS Playlists
  "-f",
  "hls",
  "-hls_time",
  "2",
  "-hls_playlist_type",
  "vod",
  "-hls_flags",
  "independent_segments",
  "-hls_segment_type",
  "mpegts",
  "-hls_segment_filename",
  "out/stream_%v/data%02d.ts",
  "-var_stream_map",
  "v:0 v:1 v:2",
  "out/stream_%v/stream.m3u8",
  "-master_pl_name",
  "out/master.m3u8",
]);

childProcess.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

childProcess.stderr.on("data", (data) => {
  console.log(`stderr: ${data}`);
});

childProcess.on("error", (error) => {
  console.log(`error: ${error.message}`);
});

childProcess.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
