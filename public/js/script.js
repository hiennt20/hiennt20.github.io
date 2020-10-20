$(function () {
  $.ajax({
    url: "http://localhost:3000/users",
  }).done(function (users) {
    let htmlString = "";

    // Dùng vòng lặp for i
    // for (let i = 0; i < users.length; i++) {
    //   htmlString += `<tr>
    //     <td>${users[i].name}</td>
    //     <td>${users[i].birthday}</td>
    //     <td>wtribe0@kickstarter.com</td>
    //     <td>867-130-6017</td>
    //     <td>
    //       <a href="/edit.html?id=1" class="text-info"
    //         ><i class="fa fa-edit"></i> Chỉnh sửa</a
    //       >
    //       |
    //       <a href="javascript:void(0)" class="text-danger"
    //         ><i class="fa fa-trash-alt"></i> Xóa</a
    //       >
    //     </td>
    //   </tr>`;
    // }

    // Dùng vòng lặp for of
    for (let user of users) {
      htmlString += `<tr>
          <td>${user.name}</td>
          <td>${user.birthday}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>
            <a href="/edit.html?id=1" class="text-info"
              ><i class="fa fa-edit"></i> Chỉnh sửa</a
            >
            |
            <a href="javascript:void(0)" class="text-danger"
              ><i class="fa fa-trash-alt"></i> Xóa</a
            >
          </td>
        </tr>`;
    }

    // Thay đổi nội dung HTML của thẻ tbody thành chuỗi htmlString ở trên
    $("#table-users").html(htmlString);
  });
});

function deleteStudent() {
  $("#exampleModal").modal("show");
}
