class Common {
  localNotify(controller, hdr, msg, btn){
    return controller.create({
        header: hdr,
        message: msg,
        buttons: btn
      }).then(
        done => done.present()
    );
  }
}

export default Common.prototype;