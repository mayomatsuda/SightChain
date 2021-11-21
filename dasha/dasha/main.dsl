context
{
  // declare input variables here. phone must always be declared. name is optional
  input phone: string;
  input balance: string;
  
  output sendAmount: string = "";
  output sendTo: string = "";
}

start node root //start node
{
  do
  {
    #connectSafe($phone); //connect via phone
    goto tr;
  }
  transitions
  {
    tr: goto welcome;
  }

}

node welcome
{
  do
  {
    #waitForSpeech(1000);
    #sayText("Welcome to Sight Chain! What would you like to do?");
    wait *; //wait for user speech
  }
  transitions
  {
    get_balance: goto get_balance on #messageHasIntent("get_balance");
    send_balance: goto set_account on #messageHasIntent("send_balance");
    quit: goto quit on #messageHasIntent("quit");
  }
}

node get_balance
{
  do
  {
    #sayText("Wallet balance is " +  $balance);
    goto tr;
  }
  transitions
  {
    tr: goto welcome;
  }
}

node set_account
{
  do
  {
    #sayText("What address would you like to send to?");
    wait *;
  }
  transitions
  {
    tr: goto set_amount on true;
  }
  onexit
  {
    tr: do
    {
      set $sendTo = #getMessageText();
    }
  }
}

node set_amount
{
  do
  {
    #sayText("What amount would you like to send?");
    wait *;
  }
  transitions
  {
    tr: goto confirm on true;
  }
  onexit
  {
    tr: do
    {
      set $sendAmount = #getMessageText();
    }
  }
}

node confirm
{
  do
  {
    #sayText("Processing payment.");
    goto tr;
  }
  transitions
  {
    tr: goto welcome;
  }
}

node quit
{
  do
  {
    exit;
  }
}
