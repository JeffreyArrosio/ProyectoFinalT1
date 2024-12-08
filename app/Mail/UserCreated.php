<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class UserCreated extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $plainPassword;

    /**
     * Create a new message instance.
     */
    public function __construct($user, $plainPassword)
    {
        $this->user = $user;
        $this->plainPassword = $plainPassword;
    }
    /**
     * Get the message envelope.
     */

    public function build()
    {
        return $this->subject('Se ha creado tu cuenta de usuario para Ecovida.')
            ->view('emails.user_created')->with([
                'user' => $this->user,
                'password' => $this->plainPassword,
            ]);
    }
}
