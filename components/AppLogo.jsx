import React from 'react';


class AppLogo extends React.Component {
  render() {
    return (
    <div>
      <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgNzAuMDcyIDcwLjA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzAuMDcyIDcwLjA3MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyI+CgkJCQkJPGc+CgkJCQkJCTxwYXRoIGQ9Ik01OS42NDksMzIuNjY3Yy0wLjY4NCwwLTEuMjEzLDAuMTQ3LTEuNTY0LDAuNDM5Yy0wLjIxNSwwLjE2Ny0wLjQwNiwwLjQ0OS0wLjU5OCwwLjg0Mmg0LjM0MyAgICAgICAgYy0wLjA0OC0wLjUzNy0wLjM4OC0wLjkxOC0xLjAzLTEuMTE5QzYwLjQ3NiwzMi43MjMsNjAuMDgzLDMyLjY2Nyw1OS42NDksMzIuNjY3IiBmaWxsPSIjZmY2MDNhIi8+CgkJCQkJCTxwYXRoIGQ9Ik01NS43ODEsMzQuNDA1aC0zLjg3OGMwLjAyNywwLjQxOSwwLjI0NCwwLjcxOCwwLjY1NywwLjg5NWMwLjQxNSwwLjE3OCwwLjg0NCwwLjI2NSwxLjMsMC4yNjUgICAgICAgIGMwLjU0MywwLDAuOTY3LTAuMTA1LDEuMjc3LTAuMzE2QzU1LjQ0OCwzNS4wNDMsNTUuNjY3LDM0Ljc2LDU1Ljc4MSwzNC40MDUiIGZpbGw9IiNmZjYwM2EiLz4KCQkJCQkJPHBhdGggZD0iTTUxLjkxMiwzMy45NTNoNC4wMzVjMC4zNTQtMC43MzEsMC42OTMtMS4yMzIsMS4wMDQtMS41YzAuNTIyLTAuNDMsMS4yODktMC42MzgsMi4zMDQtMC42MzggICAgICAgIGMxLjQ3LDAsMi41MDMsMC4yNjgsMy4xMjUsMC44MjdjMC4zNCwwLjMwMSwwLjU2NiwwLjc0LDAuNjc2LDEuMzEzaDEuNjA4djAuNDUzaC0xLjYwOGMtMC4xMDUsMC45MjMtMC42NzEsMS41NTEtMS43MDQsMS44ODIgICAgICAgIGMtMC41NTcsMC4xODMtMS4zMTIsMC4yNjctMi4yNTYsMC4yNjd2LTAuODQxYzAuNzUzLTAuMDMsMS4zMDMtMC4wOTQsMS42NDYtMC4yMDNjMC42MzItMC4yLDAuOTc3LTAuNTY4LDEuMDU0LTEuMTA1aC00LjUwNSAgICAgICAgYy0wLjIyOCwwLjY4OS0wLjYxMSwxLjE5OS0xLjEyOSwxLjUyMmMtMC41MzYsMC4zMy0xLjI2NCwwLjQ5NC0yLjE5NiwwLjQ5NGMtMC44NCwwLTEuNjA0LTAuMTc4LTIuMjcxLTAuNTM0ICAgICAgICBjLTAuNjc1LTAuMzUtMS4wMi0wLjg0OS0xLjAyMy0xLjQ4NGgtMS4xVjMzLjk1aDEuMDgxYzAuMDgyLTAuNjMsMC40MDYtMS4xMTQsMC45NjctMS40NTMgICAgICAgIGMwLjU4LTAuMzM2LDEuMzIxLTAuNTE1LDIuMjU5LTAuNTMzdjAuODMzYy0wLjQyLDAuMDIzLTAuNzg1LDAuMDg0LTEuMDgxLDAuMTk2QzUyLjIzNiwzMy4yMDIsNTEuOTM5LDMzLjUyMyw1MS45MTIsMzMuOTUzICAgICAgICAgTTU3LjEwOCwyOC43MmMtNS4yNDYsMC05LjQ5OCwyLjQ0NS05LjQ5OCw1LjQ2NmMwLDMuMDIzLDQuMjUyLDUuNDY5LDkuNDk4LDUuNDY5YzUuMjUxLDAsOS41MDMtMi40NDUsOS41MDMtNS40NjkgICAgICAgIEM2Ni42MTEsMzEuMTY1LDYyLjM1OSwyOC43Miw1Ny4xMDgsMjguNzIiIGZpbGw9IiNmZjYwM2EiLz4KCQkJCQk8L2c+CgkJCQk8L2c+CgkJCQk8cGF0aCBkPSJNNTcuMTA4LDQwLjM4N2MtNC44MTcsMC04Ljc3Ny0yLjA2NC05LjQwMi00LjczOGMtMC4wNTUsMC4yNDMtMC4wOTYsMC40ODMtMC4wOTYsMC43M2MwLDMuMDIsNC4yNTIsNS40Nyw5LjQ5OCw1LjQ3ICAgICAgYzUuMjUxLDAsOS41MDMtMi40NSw5LjUwMy01LjQ3YzAtMC4yNDctMC4wNDgtMC40OTItMC4wOTYtMC43M0M2NS44OTYsMzguMzIyLDYxLjkyNyw0MC4zODcsNTcuMTA4LDQwLjM4N3oiIGZpbGw9IiNmZjYwM2EiLz4KCQkJCTxwYXRoIGQ9Ik01Ny4xMDgsNDIuNTc4Yy00LjgxNywwLTguNzc3LTIuMDYyLTkuNDAyLTQuNzMyYy0wLjA1NSwwLjI0MS0wLjA5NiwwLjQ4My0wLjA5NiwwLjcyOGMwLDMuMDIsNC4yNTIsNS40Nyw5LjQ5OCw1LjQ3ICAgICAgYzUuMjUxLDAsOS41MDMtMi40NSw5LjUwMy01LjQ3YzAtMC4yNDQtMC4wNDgtMC40OTMtMC4wOTYtMC43MjhDNjUuODk2LDQwLjUxNyw2MS45MjcsNDIuNTc4LDU3LjEwOCw0Mi41Nzh6IiBmaWxsPSIjZmY2MDNhIi8+CgkJCQk8cGF0aCBkPSJNNTcuMTA4LDQ0Ljc3MWMtNC44MTcsMC04Ljc3Ny0yLjA2NC05LjQwMi00LjczM2MtMC4wNTUsMC4yNDItMC4wOTYsMC40NzktMC4wOTYsMC43M2MwLDMuMDIyLDQuMjUyLDUuNDcsOS40OTgsNS40NyAgICAgIGM1LjI1MSwwLDkuNTAzLTIuNDQ3LDkuNTAzLTUuNDdjMC0wLjI0NC0wLjA0OC0wLjQ4OC0wLjA5Ni0wLjczQzY1Ljg5Niw0Mi43MDYsNjEuOTI3LDQ0Ljc3MSw1Ny4xMDgsNDQuNzcxeiIgZmlsbD0iI2ZmNjAzYSIvPgoJCQkJPHBhdGggZD0iTTU3LjEwOCw0Ni45NjFjLTQuODE3LDAtOC43NzctMi4wNjItOS40MDItNC43MzZjLTAuMDU1LDAuMjQyLTAuMDk2LDAuNDg0LTAuMDk2LDAuNzNjMCwzLjAyLDQuMjUyLDUuNDY1LDkuNDk4LDUuNDY1ICAgICAgYzUuMjUxLDAsOS41MDMtMi40NDUsOS41MDMtNS40NjVjMC0wLjI0Ni0wLjA0OC0wLjQ5My0wLjA5Ni0wLjczQzY1Ljg5Niw0NC45LDYxLjkyNyw0Ni45NjEsNTcuMTA4LDQ2Ljk2MXoiIGZpbGw9IiNmZjYwM2EiLz4KCQkJCTxwYXRoIGQ9Ik01Ny4xMDgsNDkuNDgxYy00LjgxNywwLTguNzc3LTIuMDY0LTkuNDAyLTQuNzMzYy0wLjA1NSwwLjIzOS0wLjA5NiwwLjQ4My0wLjA5NiwwLjcyOGMwLDMuMDE4LDQuMjUyLDUuNDcsOS40OTgsNS40NyAgICAgIGM1LjI1MSwwLDkuNTAzLTIuNDUyLDkuNTAzLTUuNDdjMC0wLjI0NC0wLjA0OC0wLjQ5My0wLjA5Ni0wLjcyOEM2NS44OTYsNDcuNDE3LDYxLjkyNyw0OS40ODEsNTcuMTA4LDQ5LjQ4MXoiIGZpbGw9IiNmZjYwM2EiLz4KCQkJCTxwYXRoIGQ9Ik01Ny4xMDgsNTEuNjczYy00LjgxNywwLTguNzc3LTIuMDY2LTkuNDAyLTQuNzMyYy0wLjA1NSwwLjIzOS0wLjA5NiwwLjQ3OS0wLjA5NiwwLjcyOSAgICAgIGMwLDMuMDIxLDQuMjUyLDUuNDY4LDkuNDk4LDUuNDY4YzUuMjUxLDAsOS41MDMtMi40NDcsOS41MDMtNS40NjhjMC0wLjI0OS0wLjA0OC0wLjQ5Ny0wLjA5Ni0wLjcyOSAgICAgIEM2NS44OTYsNDkuNjA2LDYxLjkyNyw1MS42NzMsNTcuMTA4LDUxLjY3M3oiIGZpbGw9IiNmZjYwM2EiLz4KCQkJCTxwYXRoIGQ9Ik01Ny4xMDgsNTMuODY1Yy00LjgxNywwLTguNzc3LTIuMDY0LTkuNDAyLTQuNzNjLTAuMDU1LDAuMjM5LTAuMDk2LDAuNDgtMC4wOTYsMC43MjhjMCwzLjAyLDQuMjUyLDUuNDcsOS40OTgsNS40NyAgICAgIGM1LjI1MSwwLDkuNTAzLTIuNDUsOS41MDMtNS40N2MwLTAuMjQ0LTAuMDQ4LTAuNDg4LTAuMDk2LTAuNzI4QzY1Ljg5Niw1MS44MDEsNjEuOTI3LDUzLjg2NSw1Ny4xMDgsNTMuODY1eiIgZmlsbD0iI2ZmNjAzYSIvPgoJCQkJPHBhdGggZD0iTTU3LjEwOCw1Ni4wNmMtNC44MTcsMC04Ljc3Ny0yLjA2NC05LjQwMi00LjczNWMtMC4wNTUsMC4yNDItMC4wOTYsMC40NzktMC4wOTYsMC43MjljMCwzLjAyMSw0LjI1Miw1LjQ3MSw5LjQ5OCw1LjQ3MSAgICAgIGM1LjI1MSwwLDkuNTAzLTIuNDUsOS41MDMtNS40NzFjMC0wLjI0OC0wLjA0OC0wLjQ5LTAuMDk2LTAuNzI5QzY1Ljg5Niw1My45OTUsNjEuOTI3LDU2LjA2LDU3LjEwOCw1Ni4wNnoiIGZpbGw9IiNmZjYwM2EiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyI+CgkJCQkJPGc+CgkJCQkJCTxwYXRoIGQ9Ik0zOS4yOTQsMzkuMjUzYy0wLjY4NSwwLTEuMjA5LDAuMTQ2LTEuNTY1LDAuNDRjLTAuMjE0LDAuMTYyLTAuNDExLDAuNDQ5LTAuNjA0LDAuODQyaDQuMzUyICAgICAgICBjLTAuMDQ4LTAuNTM5LTAuMzkzLTAuOTItMS4wMjgtMS4xMThDNDAuMTE0LDM5LjMwMywzOS43MzEsMzkuMjUzLDM5LjI5NCwzOS4yNTMiIGZpbGw9IiNmZjYwM2EiLz4KCQkJCQkJPHBhdGggZD0iTTM1LjQyNyw0MC45ODhoLTMuODgyYzAuMDI4LDAuNDE4LDAuMjQzLDAuNzE5LDAuNjYxLDAuODk2YzAuNDExLDAuMTc2LDAuODQ1LDAuMjYzLDEuMzA0LDAuMjYzICAgICAgICBjMC41NDIsMCwwLjk2Ni0wLjEwMywxLjI3NS0wLjMxNEMzNS4wODgsNDEuNjIzLDM1LjMwOSw0MS4zNCwzNS40MjcsNDAuOTg4IiBmaWxsPSIjZmY2MDNhIi8+CgkJCQkJCTxwYXRoIGQ9Ik0zMS41Niw0MC41MzVoNC4wMjhjMC4zNTUtMC43MjksMC42OTQtMS4yMjgsMS4wMDUtMS40OTdjMC41MjEtMC40MzYsMS4yOTEtMC42NDMsMi4zMDQtMC42NDMgICAgICAgIGMxLjQ2NSwwLDIuNTA1LDAuMjczLDMuMTIxLDAuODI3YzAuMzQsMC4zMDcsMC41NywwLjc0MiwwLjY4LDEuMzEyaDEuNjA1djAuNDUzaC0xLjYwNWMtMC4xMDUsMC45Mi0wLjY3MSwxLjU0OS0xLjcwNCwxLjg3OCAgICAgICAgYy0wLjU2LDAuMTgzLTEuMzEyLDAuMjczLTIuMjU5LDAuMjczdi0wLjg0NGMwLjc1OC0wLjAyNywxLjMwMy0wLjA5NiwxLjY1MS0wLjIwNWMwLjYyMy0wLjE5NiwwLjk3My0wLjU2NiwxLjA1NS0xLjEwMyAgICAgICAgaC00LjUxNGMtMC4yMjUsMC42ODgtMC42MDcsMS4xOTgtMS4xMywxLjUyMWMtMC41MzUsMC4zMjktMS4yNjQsMC40OTMtMi4xOTcsMC40OTNjLTAuODQxLDAtMS41OTctMC4xNzYtMi4yNy0wLjUzNiAgICAgICAgYy0wLjY2OC0wLjM0NS0xLjAxNC0wLjg0NC0xLjAyNS0xLjQ4MmgtMS4xMDF2LTAuNDUyaDEuMDg5YzAuMDc3LTAuNjI5LDAuMzk5LTEuMTE1LDAuOTY2LTEuNDU1ICAgICAgICBjMC41NzItMC4zMzgsMS4zMTctMC41MTEsMi4yNTctMC41Mjl2MC44MjhjLTAuNDIxLDAuMDI3LTAuNzgyLDAuMDg3LTEuMDg3LDAuMTk2QzMxLjg4MSwzOS43ODIsMzEuNTg3LDQwLjEwMiwzMS41Niw0MC41MzUgICAgICAgICBNMzYuNzU2LDM1LjI5NWMtNS4yNTMsMC05LjUwMiwyLjQ1LTkuNTAyLDUuNDcxYzAsMy4wMiw0LjI0OSw1LjQ2Nyw5LjUwMiw1LjQ2N2M1LjI0OCwwLDkuNDkyLTIuNDQ3LDkuNDkyLTUuNDY3ICAgICAgICBDNDYuMjQ4LDM3Ljc0NSw0Mi4wMDQsMzUuMjk1LDM2Ljc1NiwzNS4yOTUiIGZpbGw9IiNmZjYwM2EiLz4KCQkJCQk8L2c+CgkJCQk8L2c+CgkJCQk8cGF0aCBkPSJNMzYuNzU2LDQ2Ljk2MWMtNC44MjEsMC04Ljc4Ny0yLjA2Mi05LjQwOC00LjczM2MtMC4wNTQsMC4yNDEtMC4wOTQsMC40ODMtMC4wOTQsMC43MjhjMCwzLjAyLDQuMjQ5LDUuNDcsOS41MDIsNS40NyAgICAgIGM1LjI0OCwwLDkuNDkyLTIuNDUsOS40OTItNS40N2MwLTAuMjQ0LTAuMDM2LTAuNDg4LTAuMDg5LTAuNzI4QzQ1LjUzOSw0NC45LDQxLjU3NCw0Ni45NjEsMzYuNzU2LDQ2Ljk2MXoiIGZpbGw9IiNmZjYwM2EiLz4KCQkJCTxwYXRoIGQ9Ik0zNi43NTYsNDkuMTU5Yy00LjgyMSwwLTguNzg3LTIuMDY0LTkuNDA4LTQuNzM3Yy0wLjA1NCwwLjI0NC0wLjA5NCwwLjQ4My0wLjA5NCwwLjcyOSAgICAgIGMwLDMuMDIyLDQuMjQ5LDUuNDY4LDkuNTAyLDUuNDY4YzUuMjQ4LDAsOS40OTItMi40NDUsOS40OTItNS40NjhjMC0wLjI0Ni0wLjAzNi0wLjQ5LTAuMDg5LTAuNzI5ICAgICAgQzQ1LjUzOSw0Ny4wOTUsNDEuNTc0LDQ5LjE1OSwzNi43NTYsNDkuMTU5eiIgZmlsbD0iI2ZmNjAzYSIvPgoJCQkJPHBhdGggZD0iTTM2Ljc1Niw1MS4zNWMtNC44MjEsMC04Ljc4Ny0yLjA2Ny05LjQwOC00LjczNmMtMC4wNTQsMC4yNC0wLjA5NCwwLjQ4MS0wLjA5NCwwLjcyOWMwLDMuMDI0LDQuMjQ5LDUuNDcsOS41MDIsNS40NyAgICAgIGM1LjI0OCwwLDkuNDkyLTIuNDQ1LDkuNDkyLTUuNDdjMC0wLjI0NC0wLjAzNi0wLjQ4OC0wLjA4OS0wLjcyOUM0NS41MzksNDkuMjg5LDQxLjU3NCw1MS4zNSwzNi43NTYsNTEuMzV6IiBmaWxsPSIjZmY2MDNhIi8+CgkJCQk8cGF0aCBkPSJNMzYuNzU2LDUzLjU0NGMtNC44MjEsMC04Ljc4Ny0yLjA2Mi05LjQwOC00LjczOGMtMC4wNTQsMC4yNDQtMC4wOTQsMC40ODMtMC4wOTQsMC43MzIgICAgICBjMCwzLjAyMSw0LjI0OSw1LjQ2OCw5LjUwMiw1LjQ2OGM1LjI0OCwwLDkuNDkyLTIuNDQ3LDkuNDkyLTUuNDY4YzAtMC4yNDktMC4wMzYtMC40OTMtMC4wODktMC43MzIgICAgICBDNDUuNTM5LDUxLjQ4MSw0MS41NzQsNTMuNTQ0LDM2Ljc1Niw1My41NDR6IiBmaWxsPSIjZmY2MDNhIi8+CgkJCQk8cGF0aCBkPSJNMzYuNzU2LDU2LjA2Yy00LjgyMSwwLTguNzg3LTIuMDY0LTkuNDA4LTQuNzM1Yy0wLjA1NCwwLjI0NC0wLjA5NCwwLjQ4My0wLjA5NCwwLjcyOWMwLDMuMDE5LDQuMjQ5LDUuNDY4LDkuNTAyLDUuNDY4ICAgICAgYzUuMjQ4LDAsOS40OTItMi40NDksOS40OTItNS40NjhjMC0wLjI0Ni0wLjAzNi0wLjQ5LTAuMDg5LTAuNzI5QzQ1LjUzOSw1My45OTUsNDEuNTc0LDU2LjA2LDM2Ljc1Niw1Ni4wNnoiIGZpbGw9IiNmZjYwM2EiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyI+CgkJCQkJPGc+CgkJCQkJCTxwYXRoIGQ9Ik0xOC45MzYsNDYuMTUzYy0wLjY4NywwLTEuMjEyLDAuMTQ3LTEuNTY0LDAuNDRjLTAuMjEsMC4xNjEtMC40MDksMC40NDQtMC41OTgsMC44NDFoNC4zNDkgICAgICAgIGMtMC4wNTEtMC41MzgtMC4zOS0wLjkxOS0xLjAzNS0xLjExOUMxOS43NTgsNDYuMjA1LDE5LjM3MSw0Ni4xNTMsMTguOTM2LDQ2LjE1MyIgZmlsbD0iI2ZmNjAzYSIvPgoJCQkJCQk8cGF0aCBkPSJNMTUuMDY4LDQ3Ljg4OWgtMy44NzdjMC4wMjgsMC40MiwwLjI0MywwLjcyMSwwLjY1NiwwLjg5NWMwLjQxNiwwLjE3OCwwLjg0OSwwLjI2NSwxLjMwNCwwLjI2NSAgICAgICAgYzAuNTQ2LDAsMC45NjctMC4xMDEsMS4yNzctMC4zMTJDMTQuNzM0LDQ4LjUyNSwxNC45NTEsNDguMjM4LDE1LjA2OCw0Ny44ODkiIGZpbGw9IiNmZjYwM2EiLz4KCQkJCQkJPHBhdGggZD0iTTExLjIwNSw0Ny40MzhoNC4wMjJjMC4zNjItMC43MzIsMC43MDMtMS4yMzQsMS4wMTItMS40OTljMC41Mi0wLjQzNCwxLjI5MS0wLjY0MSwyLjI5OC0wLjY0MSAgICAgICAgYzEuNDcxLDAsMi41MDUsMC4yNzMsMy4xMjcsMC44MjhjMC4zNDEsMC4zMDMsMC41NjUsMC43NDEsMC42NzMsMS4zMTJoMS42MDd2MC40NTFoLTEuNjA3ICAgICAgICBjLTAuMTA1LDAuOTIyLTAuNjY2LDEuNTQ5LTEuNzAzLDEuODhjLTAuNTU4LDAuMTgxLTEuMzA4LDAuMjcxLTIuMjU2LDAuMjcxdi0wLjg0MmMwLjc1OC0wLjAyNywxLjMwMy0wLjA5NiwxLjY1NC0wLjIwNSAgICAgICAgYzAuNjIxLTAuMjAxLDAuOTcyLTAuNTcsMS4wNDgtMS4xMDRoLTQuNTA4Yy0wLjIyNywwLjY4Ny0wLjYwOCwxLjItMS4xMjksMS41MjFjLTAuNTM1LDAuMzMxLTEuMjY0LDAuNDg4LTIuMTk1LDAuNDg4ICAgICAgICBjLTAuODQzLDAtMS42MDMtMC4xNjktMi4yNy0wLjUyOWMtMC42NjgtMC4zNTItMS4wMTktMC44NDQtMS4wMjUtMS40ODRIOC44NTN2LTAuNDVoMS4wODYgICAgICAgIGMwLjA4Mi0wLjYzMiwwLjQwNS0xLjExNSwwLjk2Ny0xLjQ1NWMwLjU3Ny0wLjMzNywxLjMyMi0wLjUxMywyLjI1OS0wLjUzMXYwLjgzYy0wLjQyMywwLjAyNS0wLjc4NiwwLjA4Ny0xLjA4NCwwLjE5NiAgICAgICAgQzExLjUyNyw0Ni42ODMsMTEuMjI5LDQ3LjAwMiwxMS4yMDUsNDcuNDM4IE0xNi40MDIsNDIuMTk3Yy01LjI1MSwwLTkuNSwyLjQ0NS05LjUsNS40NzFjMCwzLjAyLDQuMjQ5LDUuNDY4LDkuNSw1LjQ2OCAgICAgICAgYzUuMjQ3LDAsOS40OTMtMi40NDgsOS40OTMtNS40NjhDMjUuODk1LDQ0LjY0MywyMS42NSw0Mi4xOTcsMTYuNDAyLDQyLjE5NyIgZmlsbD0iI2ZmNjAzYSIvPgoJCQkJCTwvZz4KCQkJCTwvZz4KCQkJCTxwYXRoIGQ9Ik0xNi40MDIsNTMuODY1Yy00LjgxOSwwLTguNzg4LTIuMDY0LTkuNDA2LTQuNzNjLTAuMDU0LDAuMjM5LTAuMDk0LDAuNDgtMC4wOTQsMC43MjhjMCwzLjAyLDQuMjQ5LDUuNDcsOS40OTcsNS40NyAgICAgIGM1LjI0OSwwLDkuNDk1LTIuNDUsOS40OTUtNS40N2MwLTAuMjQ0LTAuMDQtMC40ODgtMC4wOTEtMC43MjhDMjUuMTg1LDUxLjgwMSwyMS4yMTgsNTMuODY1LDE2LjQwMiw1My44NjV6IiBmaWxsPSIjZmY2MDNhIi8+CgkJCQk8cGF0aCBkPSJNMTYuNDAyLDU2LjA2Yy00LjgxOSwwLTguNzg4LTIuMDY0LTkuNDA2LTQuNzM1Yy0wLjA1NCwwLjI0NC0wLjA5NCwwLjQ4My0wLjA5NCwwLjcyOWMwLDMuMDE5LDQuMjQ5LDUuNDY4LDkuNDk3LDUuNDY4ICAgICAgYzUuMjQ5LDAsOS40OTUtMi40NDksOS40OTUtNS40NjhjMC0wLjI0Ni0wLjA0LTAuNDktMC4wOTEtMC43MjlDMjUuMTg1LDUzLjk5NSwyMS4yMTgsNTYuMDYsMTYuNDAyLDU2LjA2eiIgZmlsbD0iI2ZmNjAzYSIvPgoJCQk8L2c+CgkJPC9nPgoJCTxwYXRoIGQ9Ik0wLDM3LjAzOGMxLjkwOC0yLjAzNSw0LjYzMS0zLjE3OSw3LjQwMi0zLjY2M2MxLjM5OS0wLjIyOSwyLjg2OS0wLjI0NSw0LjI4OSwwLjA4N2MxLjQyLDAuMzE5LDIuNzk5LDAuOTk5LDMuOTA1LDIuMDExICAgIGwtMS4wMzUsMC4xODdjMS42NTQtMy43NzMsNC44ODUtNi45ODUsOC45MzktOC4yOTVjMi4wMDktMC42Nyw0LjE4Ni0wLjg4MSw2LjI4OC0wLjU4YzIuMTA2LDAuMjg4LDQuMTIzLDEuMDQyLDUuOTMzLDIuMDk2ICAgIGwtMS4zOTMsMC40MmMwLjkyNS0xLjkyMiwyLjE0Mi0zLjc0NSwzLjY5Mi01LjI4MWMxLjU0Mi0xLjUzMSwzLjQyNy0yLjc4Myw1LjUxMi0zLjQ2NWM0LjIwNi0xLjQyOSw4Ljc5NS0wLjcwNSwxMi41NTUsMS4xOCAgICBsLTAuOTMxLDAuMzUzYzEuMzU0LTIuODQyLDMuMzI1LTUuNDk5LDYuMDA4LTcuMjJjMi42Ni0xLjcyMiw1Ljg0LTIuNSw4LjkwOC0yLjI4N2MtMy4wNjMsMC4xODEtNi4wNjUsMS4xNTEtOC40MSwyLjk5OSAgICBjLTIuMzczLDEuODE1LTQuMTE1LDQuMzI4LTUuMjI3LDcuMDc0bC0wLjI2NSwwLjYzN2wtMC42NjgtMC4yODdjLTMuNjI5LTEuNTM4LTcuNzUxLTIuMDA5LTExLjM1MS0wLjY5NSAgICBjLTEuNzg4LDAuNjUyLTMuNDEzLDEuNzEzLTQuNzU5LDMuMDhjLTEuMzU0LDEuMzYyLTIuNDA0LDMuMDItMy4yODQsNC43NjhsLTAuNDg4LDAuOTc5bC0wLjkwNy0wLjU1MiAgICBjLTMuMTk1LTEuOTQyLTcuMTE1LTIuNTktMTAuNjY3LTEuNDk5Yy0zLjU0NiwxLjA3NC02LjYsMy43MzItOC4zMTUsNy4xMzJsLTAuNDE3LDAuODNsLTAuNjItMC42NDEgICAgYy0xLjc4My0xLjg0NS00LjU1My0yLjQ1MS03LjIwNC0yLjI1M2MtMS4zMzMsMC4wOTgtMi42NzIsMC4zOTktMy45NDMsMC44NzJDMi4yODcsMzUuNTE2LDEuMDQ3LDM2LjEzMiwwLDM3LjAzOHoiIGZpbGw9IiNmZjYwM2EiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
    </div>
    );
 }
}

module.exports = AppLogo;
