function moredetail() {
    $("#moredetail").css("display", "inline"),
    $("#moredetail0").css("display", "none")
}
function talk() {
    var t = {
        sub_id: "",
        u_id: "",
        centent: "",
        type: ""
    };
    t.sub_id = $("#sub_ID").val(),
    t.u_id = $("#u_ID").val(),
    t.content = $("#content").val(),
    t.type = $("#type").val(),
    $.ajax({
        type: "POST",
        url: "/ajax/talk_ajax",
        cache: !0,
        dataType: "json",
        data: t,
        success: function(t) {
            1 == t.success ? ($("#talkp").text("提交中"), $("#talkp").attr("disabled", "disabled"), window.location.reload(), $("#talkp").text("页面刷新中")) : ($("#talkp").text("提交中"), $("#talkp").attr("disabled", "disabled"), alert(t.msg), $("#talkp").text("提交"), $("#talkp").removeAttr("disabled"))
        }
    })
}
function search() {
    var t = $("#sn").val();
    t = $.trim(t),
    t = encodeURIComponent(t).replace(/'/g, "%27"),
    "" == t && alert("请填写内容"),
    "" != t && (window.location.href = "/search2/" + t)
}
function down() {
    var t = {
        sub_id: "",
        geetest_challenge: "",
        geetest_validate: "",
        geetest_seccode: ""
    };
    t.sub_id = $("#down").attr("sid"),
    t.geetest_challenge = $("input[name='geetest_challenge']").val(),
    t.geetest_validate = $("input[name='geetest_validate']").val(),
    t.geetest_seccode = $("input[name='geetest_seccode']").val();
    var e = $("#count").text();
    $.ajax({
        type: "POST",
        url: "/ajax/down_ajax",
        cache: !0,
        dataType: "json",
        data: t,
        success: function(t) {
            1 == t.success ? ($("#count").text(1 * e + 1), $("#down").attr("disabled", "disabled"), $("#down").text("下载如未开始可使用右边链接进行下载"), $("#down_url").html('<a href="' + t.url + '">下载链接</a>'), $("#down_url").addClass("red"), window.location.href = t.url) : alert(t.msg)
        }
    })
}
function editUp() {
    var t = {
        type: "",
        season: "",
        ep: "",
        lang: "",
        edit: "",
        from: "",
        edition: "",
        did: "",
        zu: ""
    };
    $('input[name="type"]:checked').each(function() {
        t.type = $(this).val()
    }),
    t.season = $("#season").val(),
    t.ep = $("#ep").val(),
    t.lang = [],
    $('input[name="lang"]:checked').each(function() {
        t.lang.push($(this).val())
    }),
    t.edit = $("#edit").val(),
    t.did = $("#douban_ID").val(),
    t.zu = $("#zu").val(),
    $('input[name="from"]:checked').each(function() {
        t.from = $(this).val()
    }),
    t.edition = $("#edition").val(),
    $("#subb").text("提交中...太久无响应请刷新页面重新提交...Sorry"),
    $("#subb").attr("disabled", "disabled"),
    $.ajax({
        type: "POST",
        url: "/ajax/editup_ajax",
        cache: !0,
        dataType: "json",
        data: t,
        success: function(t) {
            1 == t.success ? (alert(t.msg), window.location.href = "/a/" + t.id) : ($("#subb").removeAttr("disabled"), alert(t.msg))
        }
    })
}
function postUp() {
    var t = {
        type: "",
        title: "",
        season: "",
        ep: "",
        lang: "",
        shuang: "",
        from: "",
        format: "",
        edition: "",
        text: "",
        file: "",
        size: "",
        edit: "",
        did: "",
        zu: ""
    };
    $('input[name="type"]:checked').each(function() {
        t.type = $(this).val()
    }),
    t.title = $("#title").val(),
    t.season = $("#season").val(),
    t.ep = $("#ep").val(),
    t.lang = [],
    $('input[name="lang"]:checked').each(function() {
        t.lang.push($(this).val())
    }),
    $('input[name="shuang"]:checked').each(function() {
        t.shuang = $(this).val()
    }),
    $('input[name="from"]:checked').each(function() {
        t.from = $(this).val()
    }),
    t.format = [],
    $('input[name="format"]:checked').each(function() {
        t.format.push($(this).val())
    }),
    t.edition = $("#edition").val(),
    t.text = $("#text").val(),
    t.file = $("#fileurl").text(),
    t.size = $("#filesize").text(),
    t.edit = $("#edit").val(),
    t.did = $("#douban_ID").val(),
    t.zu = $("#zu").val(),
    $("#subb").text("提交中...太久无响应请刷新页面重新提交...Sorry"),
    $("#subb").attr("disabled", "disabled"),
    $.ajax({
        type: "POST",
        url: "/ajax/postup_ajax",
        cache: !0,
        dataType: "json",
        data: t,
        success: function(t) {
            1 == t.success ? (alert(t.msg), $("#subb").removeAttr("disabled"), window.location.href = "/a/" + t.id) : ($("#subb").removeAttr("disabled"), alert(t.msg))
        }
    })
}
function uploadSub() {
    $("#upSub").ajaxSubmit({
        success: function(t) {
            1 == t.success ? ($(".fileurl").show(), $("#fileurl").html("<a href='" + t.url + "'>" + t.url + "</a>"), $("#filesize").html(t.size + "k"), alert(t.msg)) : alert(t.msg)
        },
        error: function(t) {
            alert(t)
        },
        url: "/ajax/upload_ajax2",
        type: "post",
        dataType: "json"
    })
}
function uploadSub_temp() {
    $("#upSub").ajaxSubmit({
        success: function(t) {
            1 == t.success ? ($(".fileurl").show(), $("#fileurl").html("<a href='" + t.url + "'>" + t.url + "</a>"), $("#filesize").html(t.size + "k"), alert(t.msg)) : alert(t.msg)
        },
        error: function(t) {
            alert(t)
        },
        url: "/ajax/upload_ajax_temp",
        type: "post",
        dataType: "json"
    })
}
$(function() {
    $("[data-toggle='tooltip']").tooltip()
}),
$(document).ready(function() {
    $(".t1").click(function() {
        $(this).parent().parent().parent().find(".bc1").show()
    }),
    $(".t2").click(function() {
        var t = $(this).parent().parent().parent().find("a").text();
        t = "@" + t + "：",
        $(this).parent().parent().parent().find(".bc2").show(),
        $(this).parent().parent().parent().find("textarea").val(t)
    })
}),
$(document).ready(function() {
    $(".talk1").click(function() {
        var t = {
            sub_id: "",
            u_id: "",
            u_id2: "",
            t_id: "",
            centent: "",
            type: ""
        };
        t.sub_id = $("#sub_ID").val(),
        t.u_id = $("#u_ID").val(),
        t.type = $("#type").val(),
        t.u_id2 = $(this).parent().find("#u_ID2").val(),
        t.t_id = $(this).attr("id"),
        t.content = $(this).parent().find("textarea").val();
        var e = $(this);
        $.ajax({
            type: "POST",
            url: "/ajax/talk1_ajax",
            cache: !0,
            dataType: "json",
            data: t,
            success: function(t) {
                1 == t.success ? (e.text("提交中"), e.attr("disabled", "disabled"), window.location.reload(), e.text("页面刷新中")) : (e.text("提交中"), e.attr("disabled", "disabled"), alert(t.msg), e.text("提交"), e.removeAttr("disabled"))
            }
        })
    })
}),
$(document).ready(function() {
    $(".talk2").click(function() {
        var t = {
            sub_id: "",
            u_id: "",
            u_id2: "",
            u_id3: "",
            t_id: "",
            centent: "",
            type: ""
        };
        t.sub_id = $("#sub_ID").val(),
        t.u_id = $("#u_ID").val(),
        t.type = $("#type").val(),
        t.u_id2 = $(this).parent().parent().parent().parent().find("#u_ID2").val(),
        t.u_id3 = $(this).parent().find("#u_ID3").val(),
        t.t_id = $(this).attr("id"),
        t.content = $(this).parent().find("textarea").val();
        var e = $(this);
        $.ajax({
            type: "POST",
            url: "/ajax/talk2_ajax",
            cache: !0,
            dataType: "json",
            data: t,
            success: function(t) {
                1 == t.success ? (e.text("提交中"), e.attr("disabled", "disabled"), window.location.reload(), e.text("页面刷新中")) : (e.text("提交中"), e.attr("disabled", "disabled"), alert(t.msg), e.text("提交"), e.removeAttr("disabled"))
            }
        })
    })
}),
$(document).ready(function() {
    $(".rating").click(function() {
        var t = {
            r: "",
            sub_id: ""
        };
        t.r = $(this).attr("name"),
        t.sub_id = $("#down").attr("sid"),
        $.ajax({
            type: "POST",
            url: "/ajax/rating_ajax",
            cache: !0,
            dataType: "json",
            data: t,
            success: function(t) {
                1 == t.success ? (alert(t.msg), window.location.reload()) : alert(t.msg)
            }
        })
    })
}),
$(function() {
    $("#sn").bind("keypress",
    function(t) {
        if ("13" == t.keyCode) {
            var e = $("#sn").val();
            e = $.trim(e),
            e = encodeURIComponent(e).replace(/'/g, "%27"),
            "" == e && alert("请填写内容"),
            "" != e && ($("#searchbutton").text("搜索中...."), $("#searchbutton").attr("disabled", "disabled"), window.location.href = "/search2/" + e)
        }
    })
});