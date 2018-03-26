class InviteMailer < ApplicationMailer
  def new_invite(@invite)
    @invite = invite

    mail(
      to: invite.trip
    )
  end
end
